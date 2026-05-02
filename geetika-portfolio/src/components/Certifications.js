import React from 'react';
import './Certifications.css';

const certs = [
  { name: 'AWS Cloud Practitioner Course', code: 'UDEMY', color: '#f59e0b', icon: '🎓', issuer: 'Udemy' },
  { name: 'Cisco Certified Network Associate', code: 'CCNA', color: '#00d4ff', icon: '🌐', issuer: 'Cisco' },
  { name: 'Ethical Hacking Essentials', code: 'E|HE', color: '#ef4444', icon: '🔓', issuer: 'EC-Council' },
  { name: 'Network Defense Essentials', code: 'N|DE', color: '#10b981', icon: '🛡️', issuer: 'EC-Council' },
  { name: 'Digital Forensics Essentials', code: 'D|FE', color: '#a78bfa', icon: '🔍', issuer: 'EC-Council' },
  { name: 'Cyber Security and Privacy', code: 'CSP', color: '#f97316', icon: '🔐', issuer: 'Industry Cert' },
  { name: 'Software Testing', code: 'ST', color: '#06b6d4', icon: '🧪', issuer: 'Industry Cert' },
];

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">05. Certifications</div>
          <h2 className="section-title">
            My <span className="outline">Certifications</span>
          </h2>
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div className="cert-card" key={i} style={{ '--cert-color': cert.color }}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <span className="cert-code">{cert.code}</span>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="info-block">
            <span className="ib-icon">🏆</span>
            <div>
              <h4>Best Mini Project Award</h4>
              <p>Awarded for the Malware Analyzer project</p>
            </div>
          </div>
          <div className="info-block">
            <span className="ib-icon">📚</span>
            <div>
              <h4>Activities</h4>
              <p>Reading Club Member · Tech Webinars · Technical & Non-Technical Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
