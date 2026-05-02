import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="logo-bracket">&lt;</span>
        GB
        <span className="logo-bracket">/&gt;</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <span className="link-num">
                {String(links.indexOf(link) + 1).padStart(2, '0')}.
              </span>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="status-dot"></span>
        Open to Opportunities
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
