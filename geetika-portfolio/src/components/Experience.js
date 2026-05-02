import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Snap Technologies',
    role: 'Cloud Engineer Intern',
    duration: '6 Months',
    type: 'Cloud Engineering',
    color: '#00d4ff',
    points: [
      'Deployed and managed cloud resources with scalable infrastructure.',
      'Implemented integrations and automation pipelines for cloud-native workflows.',
      'Built and integrated RESTful APIs, contributing to server-side application logic.',
      'Strengthened understanding of cloud-native and backend development practices.',
    ],
  },
  {
    company: 'Zyphron Technologies Pvt. Ltd.',
    role: 'Network Pentester Intern',
    duration: '4 Weeks',
    type: 'Cybersecurity',
    color: '#10b981',
    points: [
      'Developed hands-on skills in detecting and exploiting network vulnerabilities.',
      'Performed advanced penetration testing using leading ethical hacking tools.',
      'Adhered to established security methodologies to address real-world cybersecurity issues.',
      'Enhanced overall network security and risk mitigation strategies.',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">02. Experience</div>
          <h2 className="section-title">
            Where I've <span className="outline">Worked</span>
          </h2>
        </div>

        <div className="exp-layout">
          <div className="exp-tabs">
            {experiences.map((e, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--tab-color': e.color }}
              >
                <span className="tab-company">{e.company}</span>
                <span className="tab-type">{e.type}</span>
              </button>
            ))}
          </div>

          <div className="exp-detail">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">
                  @ <span style={{ color: exp.color }}>{exp.company}</span>
                </p>
              </div>
              <span className="exp-duration">{exp.duration}</span>
            </div>

            <ul className="exp-points">
              {exp.points.map((point, i) => (
                <li key={i}>
                  <span className="point-arrow" style={{ color: exp.color }}>▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
