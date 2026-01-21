import React from "react";
import "./PrivacyPolicy.css"

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page text-white">
      <div className="container privacy-container">

        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">
          Last updated: January 07, 2026
        </p>

        <hr className="privacy-divider" />

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            The Sangguniang Kabataan Provincial Federation of Davao del Sur
            collects limited personal information when you voluntarily
            communicate with us through this website. This may include your
            name, email address, and contact number.
          </p>
          <p>
            We also collect basic technical information such as IP address,
            browser type, and access timestamps for security, analytics, and
            system administration purposes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Use of Information</h2>
          <p>
            Collected information is used exclusively to:
          </p>
          <ul>
            <li>Respond to inquiries, concerns, or feedback</li>
            <li>Maintain website functionality and security</li>
            <li>Improve user experience and content delivery</li>
          </ul>
          <p>
            Personal data is <strong>not sold, rented, or shared</strong> with
            unauthorized third parties.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Third-Party Services</h2>
          <p>
            This website integrates third-party services such as Google Maps
            and Meta (Facebook) for informational and public engagement
            purposes. These services operate under their own privacy policies.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Data Protection & Security</h2>
          <p>
            Reasonable administrative, technical, and physical safeguards are
            implemented to protect personal information against loss, misuse,
            unauthorized access, disclosure, or alteration.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Your Rights as a Data Subject</h2>
          <p>
            In accordance with Republic Act No. 10173 (Data Privacy Act of
            2012), you have the right to:
          </p>
          <ul>
            <li>Be informed about how your personal data is processed</li>
            <li>Access, correct, or update your personal information</li>
            <li>Object to the processing of your personal data</li>
            <li>Request deletion or restriction of data where applicable</li>
          </ul>
        </section>

        <section className="privacy-section privacy-contact">
          <h2>Contact Information</h2>
          <p>
            For questions, concerns, or requests regarding this Privacy Policy,
            please contact:
          </p>
          <p className="mb-1">📧 skdavaodelsur@gmail.com</p>
          <p className="mb-0">📞 +63 992 883 7721</p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

