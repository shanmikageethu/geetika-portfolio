import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">06. Contact</div>
          <h2 className="section-title">
            Get In <span className="outline">Touch</span>
          </h2>
        </div>

        <div className="contact-layout">
          <div className="contact-text">
            <p>
              I'm currently open to internship and full-time opportunities in platform engineering,
              cloud infrastructure, and backend development. If you have an opportunity or just
              want to say hi, feel free to reach out!
            </p>
            <p className="contact-sub">
              My inbox is always open. I'll do my best to get back to you.
            </p>
          </div>

          <div className="contact-cards">
            <div className="contact-card" onClick={() => copyToClipboard('shanmikageethu@gmail.com', 'email')}>
              <span className="cc-icon">📧</span>
              <div className="cc-info">
                <span className="cc-label">Email</span>
                <span className="cc-val">shanmikageethu@gmail.com</span>
              </div>
              <span className="cc-action">{copied === 'email' ? '✅ Copied!' : 'Click to copy'}</span>
            </div>

            <div className="contact-card" onClick={() => copyToClipboard('+91 7200034565', 'phone')}>
              <span className="cc-icon">📱</span>
              <div className="cc-info">
                <span className="cc-label">Phone</span>
                <span className="cc-val">+91 7200034565</span>
              </div>
              <span className="cc-action">{copied === 'phone' ? '✅ Copied!' : 'Click to copy'}</span>
            </div>

            <div className="contact-card">
              <span className="cc-icon">📍</span>
              <div className="cc-info">
                <span className="cc-label">Location</span>
                <span className="cc-val">Coimbatore, Tamil Nadu, India</span>
              </div>
              <span className="cc-action">Open to remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
