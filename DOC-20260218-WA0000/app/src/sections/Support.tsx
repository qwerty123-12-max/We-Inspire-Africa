import { useEffect, useState } from "react";
import axios from "axios";

export default function Support() {
  const [] = useState("");
  const [, setCurrency] = useState("KES");
  const [] = useState("mpesa");
  const [, setCountry] = useState("KE");
  const [] = useState(false);
  const [] = useState("");
  const [, setStats] = useState({
    total: 1240000,
    donors: 320,
    projects: 12,
  });

  // Auto-detect country & currency
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country);
        setCurrency(data.currency || "KES");
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    axios
      .get("/api/donations/stats")
      .then((response) => setStats(response.data))
      .catch(() => {});
  }, []);






  return (
    <section id="support" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Support Our Work</h1>
        <p className="text-center text-gray-600 mb-6">
          Empowering communities through your generosity 🌍
        </p>

        <div className="bg-blue-50 p-4 rounded-xl mb-6">
          <h2 className="font-semibold mb-2">Bank / M-Pesa Details</h2>
          <p><strong>Paybill Number:</strong> 400200</p>
          <p><strong>Account Number:</strong> 01134927804500</p>
        </div>

        {/* <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg p-3"
            placeholder="Enter donation amount"
            required
          />

          <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="KES">KES</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>

          <label htmlFor="method" className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="mpesa">M-Pesa (Kenya)</option>
            <option value="card">Card (Stripe)</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl py-3 text-white transition disabled:cursor-not-allowed disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700"
          >
            {isSubmitting ? "Processing..." : "Donate Now"}
          </button>
        </form>

        Donation Tracking Dashboard
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Live Impact Dashboard</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Total Donations</p>
              <p className="text-2xl font-bold">KES {stats.total.toLocaleString()}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Donors</p>
              <p className="text-2xl font-bold">{stats.donors.toLocaleString()}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Projects Funded</p>
              <p className="text-2xl font-bold">{stats.projects.toLocaleString()}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Country</p>
              <p className="text-2xl font-bold">{country}</p>
            </div>
          </div>
        </div> */}

        <p className="text-center text-sm text-gray-400 mt-6">
          Secure global donations powered by our patners. Your support creates real change!
        </p>
      </div>
    </section>
  );
}
