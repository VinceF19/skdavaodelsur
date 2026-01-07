import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container my-5 text-white" style={{ maxWidth: '800px' }}>
      <h1 className="fw-bold">Privacy Policy</h1>
      <p className="text-muted">Last updated: January 07, 2026</p>
      <hr className="border-secondary" />
      
      <section className="mb-4">
        <h3 className="h5 fw-bold">1. Data Collection</h3>
        <p className="fw-lighter">We collect minimal data to provide services, including name, email, and phone number when you contact us. We also collect usage data (IP address, browser type) via cookies.</p>
      </section>

      <section className="mb-4">
        <h3 className="h5 fw-bold">2. How We Use Data</h3>
        <p className="fw-lighter">Your data is used solely to maintain the website, respond to your inquiries, and monitor site security. We do not sell your information.</p>
      </section>

      <section className="mb-4">
        <h3 className="h5 fw-bold">3. Third-Party Services</h3>
        <p className="fw-lighter">We use Meta (Facebook) for news feed integration and Google for maps/forms. These providers have their own privacy policies.</p>
      </section>

      <section className="p-3 rounded" style={{ backgroundColor: '#002266' }}>
        <h3 className="h5 fw-bold">Contact Us</h3>
        <p className="mb-0 fw-lighter">Email: skdavaodelsur@gmail.com</p>
        <p className="mb-0 fw-lighter">Phone: +63 992 883 7721</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;