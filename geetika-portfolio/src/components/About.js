import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">01. About</div>
          <h2 className="section-title">
            Who <span className="outline">I Am</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <span className="highlight">Computer Science Engineering</span> student at
              Sri Ramakrishna Engineering College, Coimbatore, with a GPA of{' '}
              <span className="highlight">8.26</span>. My expertise spans cloud infrastructure,
              backend development, and cybersecurity.
            </p>
            <p>
              I've built serverless AWS solutions, AI-driven DDoS protection systems, and worked
              as both a <span className="highlight">Cloud Engineer Intern</span> and a{' '}
              <span className="highlight">Network Pentester Intern</span> — giving me a rare
              dual perspective on building and breaking systems.
            </p>
            <p>
              I'm passionate about competitive programming, continuous learning, and contributing
              to robust, scalable platforms. Currently seeking roles as a{' '}
              <span className="highlight">Platform Engineer</span>.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-key">Location</span>
                <span className="info-val">Coimbatore, Tamil Nadu</span>
              </div>
              <div className="info-item">
                <span className="info-key">Email</span>
                <span className="info-val">shanmikageethu@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-key">Phone</span>
                <span className="info-val">+91 7200034565</span>
              </div>
              <div className="info-item">
                <span className="info-key">Degree</span>
                <span className="info-val">M.Tech CSE (2027)</span>
              </div>
            </div>
          </div>

          <div className="about-education">
            <h3 className="edu-title">Education</h3>
            <div className="edu-timeline">
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <span className="edu-year">2022 – 2027</span>
                  <h4>M.Tech in CSE</h4>
                  <p>Sri Ramakrishna Engineering College</p>
                  <span className="edu-grade">GPA: 8.26 / 10</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <span className="edu-year">2021 – 2022</span>
                  <h4>12th Board Exam</h4>
                  <p>ELGI Matriculation Higher Secondary School</p>
                  <span className="edu-grade">Score: 90%</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <span className="edu-year">2019 – 2020</span>
                  <h4>10th Board Exam</h4>
                  <p>ELGI Matriculation Higher Secondary School</p>
                  <span className="edu-grade">Score: 87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
