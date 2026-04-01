import express from "express";
import Stripe from "stripe";
import paypal from "@paypal/checkout-server-sdk";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    return res.sendStatus(200);
  }
  next();
});

const SAFARICOM_ENV = process.env.SAFARICOM_ENV === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
const SAFARICOM_SHORTCODE = process.env.SAFARICOM_SHORTCODE || process.env.MPESA_SHORTCODE || "400200";
const SAFARICOM_ACCOUNT = process.env.SAFARICOM_ACCOUNT || "01134927804500";
const SAFARICOM_PASSKEY = process.env.SAFARICOM_PASSKEY || process.env.MPESA_PASSKEY || "";
const MPESA_CALLBACK_URL = process.env.MPESA_CALLBACK_URL || process.env.CALLBACK_URL || "https://example.com/mpesa-callback";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET || "";
const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || process.env.PAYPAL_SECRET || "";
const PAYPAL_ENV = process.env.PAYPAL_ENV === "live"
  ? new paypal.core.LiveEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET)
  : new paypal.core.SandboxEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET);
const paypalClient = new paypal.core.PayPalHttpClient(PAYPAL_ENV);

function getNairobiTimestamp() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const values = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  return `${values.year}${values.month}${values.day}${values.hour}${values.minute}${values.second}`;
}

async function getSafaricomToken() {
  const consumerKey = process.env.SAFARICOM_CONSUMER_KEY || process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.SAFARICOM_CONSUMER_SECRET || process.env.MPESA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error("Safaricom credentials are not configured.");
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
  const response = await axios.get(`${SAFARICOM_ENV}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  return response.data.access_token;
}

app.post("/api/mpesa/stkpush", async (req, res) => {
  try {
    const { amount, phone } = req.body;

    if (!amount || !phone) {
      return res.status(400).json({ error: "Amount and phone number are required." });
    }

    if (!SAFARICOM_PASSKEY) {
      return res.status(500).json({ error: "Safaricom passkey is not configured." });
    }

    const token = await getSafaricomToken();
    const timestamp = getNairobiTimestamp();
    const password = Buffer.from(`${SAFARICOM_SHORTCODE}${SAFARICOM_PASSKEY}${timestamp}`).toString("base64");

    const stkRequest = {
      BusinessShortCode: SAFARICOM_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Number(amount),
      PartyA: phone,
      PartyB: SAFARICOM_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: SAFARICOM_ACCOUNT,
      TransactionDesc: "Donation",
    };

    const response = await axios.post(`${SAFARICOM_ENV}/mpesa/stkpush/v1/processrequest`, stkRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    const message = error?.response?.data || error.message || "Safaricom STK push failed.";
    res.status(500).json({ error: message });
  }
});

app.post("/api/mpesa/callback", (req, res) => {
  console.log("M-Pesa Callback:", JSON.stringify(req.body, null, 2));

  // TODO: Save to database or trigger webhook processing

  res.json({ message: "Callback received" });
});

app.post("/api/stripe/create-session", async (req, res) => {
  try {
    if (!STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: "Stripe secret key is not configured." });
    }

    const { amount, currency = "USD" } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ error: "A valid amount is required." });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Donation",
            },
            unit_amount: Math.max(100, Math.round(Number(amount) * 100)),
          },
          quantity: 1,
        },
      ],
      success_url: process.env.STRIPE_SUCCESS_URL || "http://localhost:5173/?success=true",
      cancel_url: process.env.STRIPE_CANCEL_URL || "http://localhost:5173/?canceled=true",
    });

    res.json({ url: session.url });
  } catch (error) {
    const message = error?.message || "Stripe session creation failed.";
    res.status(500).json({ error: message });
  }
});

app.post("/api/paypal/create-order", async (req, res) => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return res.status(500).json({ error: "PayPal credentials are not configured." });
    }

    const { amount, currency = "USD" } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ error: "A valid amount is required." });
    }

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: Number(amount).toFixed(2),
          },
        },
      ],
      application_context: {
        return_url: process.env.PAYPAL_RETURN_URL || "http://localhost:5173/?paypal_success=true",
        cancel_url: process.env.PAYPAL_CANCEL_URL || "http://localhost:5173/?paypal_cancel=true",
      },
    });

    const order = await paypalClient.execute(request);
    const approvalLink = order.result.links?.find((link) => link.rel === "approve")?.href;

    if (!approvalLink) {
      return res.status(500).json({ error: "PayPal approval URL not found." });
    }

    res.json({ url: approvalLink });
  } catch (error) {
    const message = error?.message || "PayPal order creation failed.";
    res.status(500).json({ error: message });
  }
});

app.get("/api/donations/stats", (req, res) => {
  const total = Number(process.env.DONATION_TOTAL || 0);
  const donors = Number(process.env.DONATION_DONORS || 0);
  const projects = Number(process.env.DONATION_PROJECTS || 0);

  res.json({
    total,
    donors,
    projects,
  });
});

const port = Number(process.env.PORT || 5174);
app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
