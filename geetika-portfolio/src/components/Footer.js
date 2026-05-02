import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          GB
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-text">
          Designed & Built by <span>Geetika B</span>
        </p>
        <p className="footer-sub">
          Platform Engineer · Cloud · Security
        </p>
      </div>
      <div className="footer-line"></div>
    </footer>
  );
}
