import React, { useState, useEffect } from "react";

export default function Policies() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Terms of Service</h1>
      <p><strong>Last Updated:</strong> [3/3/2026]</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing this website, you agree to comply with these Terms.</p>

      <h2>2. Legal Status</h2>
      <p>
        This organization operates as a registered youth organization/NGO under applicable laws
        and may receive funding, donations, or grants.
      </p>

      <h2>3. Eligibility</h2>
      <p>Users must be at least 13 years old. Minors require guardian consent.</p>

      <h2>4. Use of Services</h2>
      <ul>
        <li>No unlawful use</li>
        <li>No harassment or harmful content</li>
        <li>No interference with platform operations</li>
      </ul>

      <h2>5. Donations & Funding</h2>
      <p>
        All donations are voluntary. Funds are used solely for organizational objectives.
        We reserve the right to allocate funds at our discretion in line with our mission.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>We are not liable for indirect or incidental damages.</p>

      <h2>7. Governing Law</h2>
      <p>These terms are governed by the laws of Kenya.</p>

      <hr />

      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> [Insert Date]</p>

      <h2>1. Legal Compliance</h2>
      <p>
        We comply with:
        <ul>
          <li>General Data Protection Regulation (GDPR)</li>
          <li>Kenya Data Protection Act, 2019</li>
        </ul>
      </p>

      <h2>2. Data We Collect</h2>
      <ul>
        <li>Name, email, phone number</li>
        <li>Youth program participation data</li>
        <li>Website usage and cookies</li>
      </ul>

      <h2>3. Legal Basis for Processing (GDPR)</h2>
      <ul>
        <li>Consent</li>
        <li>Legitimate interest</li>
        <li>Legal obligation</li>
      </ul>

      <h2>4. Your Rights</h2>
      <ul>
        <li>Access your data</li>
        <li>Request deletion</li>
        <li>Withdraw consent</li>
        <li>Data portability</li>
      </ul>

      <h2>5. Data Storage</h2>
      <p>We store data securely and retain it only as necessary.</p>

      <h2>6. Data Sharing</h2>
      <p>
        We may share data with:
        <ul>
          <li>Partner NGOs</li>
          <li>Donors (aggregated only)</li>
          <li>Legal authorities if required</li>
        </ul>
      </p>

      <h2>7. Children's Data</h2>
      <p>
        We apply strict safeguards for minors and obtain parental consent where required.
      </p>

      <h2>8. Contact</h2>
      <p>Email: inspireafrica001@gmail.com</p>

      {/* COOKIE BANNER */}
      {showBanner && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#222",
          color: "#fff",
          padding: "15px",
          textAlign: "center"
        }}>
          <p>
            We use cookies to improve your experience. By using our site, you agree to our cookie policy.
          </p>
          <button onClick={acceptCookies} style={{ padding: "8px 15px" }}>
            Accept
          </button>
        </div>
      )}
    </div>
  );
}