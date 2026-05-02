import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = [
  'Platform Engineer',
  'Cloud Engineer',
  'Backend Developer',
  'AWS DevOps Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-dot"></span>
          Available for Internship / Full-time
        </div>

        <h1 className="hero-name">
          <span className="name-hello">Hello, I'm</span>
          <br />
          <span className="name-first">GEETIKA</span>{' '}
          <span className="name-last">B</span>
        </h1>

        <div className="hero-role">
          <span className="role-prefix">$ whoami →</span>
          <span className="role-typed">{displayed}</span>
          <span className="role-cursor">|</span>
        </div>

        <p className="hero-desc">
          Computer Science Engineering student building scalable, secure systems.
          Passionate about cloud infrastructure, backend APIs, and penetration testing.
          Based in Coimbatore, Tamil Nadu.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary clip-btn">View Projects</a>
          <a href="#contact" className="btn-outline clip-btn">Get In Touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">8.26</span>
            <span className="stat-label">GPA</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">7+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">4+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="terminal-card">
          <div className="terminal-bar">
            <span className="t-dot red"></span>
            <span className="t-dot yellow"></span>
            <span className="t-dot green"></span>
            <span className="t-title">geetika@portfolio:~</span>
          </div>
          <div className="terminal-body">
            <div className="t-line">
              <span className="t-prompt">~</span>
              <span className="t-cmd"> cat profile.json</span>
            </div>
            <div className="t-output">
              <span className="t-brace">{'{'}</span>
              <div className="t-field">
                <span className="t-key">"name"</span>
                <span className="t-colon">: </span>
                <span className="t-val">"Geetika B"</span><span className="t-comma">,</span>
              </div>
              <div className="t-field">
                <span className="t-key">"role"</span>
                <span className="t-colon">: </span>
                <span className="t-val">"Platform Engineer"</span><span className="t-comma">,</span>
              </div>
              <div className="t-field">
                <span className="t-key">"stack"</span>
                <span className="t-colon">: </span>
                <span className="t-arr">["AWS", "Python", "Node.js"]</span><span className="t-comma">,</span>
              </div>
              <div className="t-field">
                <span className="t-key">"focus"</span>
                <span className="t-colon">: </span>
                <span className="t-val">"Cloud & Security"</span><span className="t-comma">,</span>
              </div>
              <div className="t-field">
                <span className="t-key">"gpa"</span>
                <span className="t-colon">: </span>
                <span className="t-num">8.26</span><span className="t-comma">,</span>
              </div>
              <div className="t-field">
                <span className="t-key">"status"</span>
                <span className="t-colon">: </span>
                <span className="t-green">"open_to_work"</span>
              </div>
              <span className="t-brace">{'}'}</span>
            </div>
            <div className="t-line">
              <span className="t-prompt">~</span>
              <span className="t-cursor-blink">█</span>
            </div>
          </div>
        </div>

        <div className="floating-badges">
          <div className="badge badge-1">AWS ☁️</div>
          <div className="badge badge-2">Penetration Testing 🔒</div>
          <div className="badge badge-3">DDoS Protection 🛡️</div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
}
