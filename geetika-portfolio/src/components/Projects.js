import React from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'DDoS Protection System for Cloud',
    subtitle: 'Architecture & Tool',
    tags: ['AI/ML', 'AWS', 'WAF', 'Auto-scaling', 'Load Balancing'],
    color: '#00d4ff',
    icon: '🛡️',
    desc: 'An AI-driven solution for real-time DDoS detection and automated mitigation. Implements traffic filtering, WAF, and adaptive recovery with auto-scaling and load balancing to ensure high availability.',
    points: [
      'Real-time DDoS detection using AI/ML algorithms',
      'Automated traffic filtering and WAF integration',
      'Adaptive recovery with auto-scaling and load balancing',
      'Minimized downtime via automated incident response',
    ],
    award: null,
  },
  {
    num: '02',
    title: 'ExpenseEye',
    subtitle: 'Serverless AWS Cost Monitor',
    tags: ['AWS Lambda', 'Slack API', 'SaaS', 'Multi-tenant', 'Serverless'],
    color: '#10b981',
    icon: '👁️',
    desc: 'A serverless AWS cost monitoring solution that automatically retrieves billing data and delivers daily and monthly summaries to Slack. Designed for multi-tenant SaaS with API-driven integrations.',
    points: [
      'Automated AWS billing data retrieval and reporting',
      'Daily and monthly cost summaries delivered to Slack',
      'Secure architecture using AWS Lambda with credential management',
      'Extended toward multi-tenant SaaS with API-driven integrations',
    ],
    award: null,
  },
  {
    num: '03',
    title: 'Malware Analyzer',
    subtitle: 'Executable Security Tool',
    tags: ['Python', 'Security', 'Automation', 'Algorithms'],
    color: '#a78bfa',
    icon: '🔬',
    desc: 'An executable tool for proactive vulnerability detection in desktop environments. Uses automated scanning and advanced algorithms to assess system configurations and provide actionable security insights.',
    points: [
      'Proactive vulnerability detection in desktop environments',
      'Automated scanning of system configurations and security risks',
      'Advanced algorithms for threat assessment',
      'Actionable mitigation insights across various sectors',
    ],
    award: '🏆 Best Mini Project Award',
  },
  {
    num: '04',
    title: 'AWS Maintenance Dashboard',
    subtitle: 'Cloud Resource Management Portal',
    tags: ['AWS', 'IAM', 'React', 'REST API', 'Multi-tenant'],
    color: '#f59e0b',
    icon: '☁️',
    desc: 'A centralized dashboard for organizations to monitor and manage their AWS cloud resources. Users securely log in using AWS access and secret keys to retrieve service-level information across the organization.',
    points: [
      'Secure login with AWS access & secret keys for authentication',
      'Centralized view of all AWS services used within the organization',
      'Individual user-level resource tracking and visibility',
      'Simplifies cloud maintenance, usage tracking, and overall management',
    ],
    award: null,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">03. Projects</div>
          <h2 className="section-title">
            Things I've <span className="outline">Built</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.num} style={{ '--proj-color': proj.color }}>
              <div className="proj-top">
                <span className="proj-icon">{proj.icon}</span>
                <span className="proj-num">{proj.num}</span>
              </div>

              {proj.award && (
                <div className="proj-award">{proj.award}</div>
              )}

              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-subtitle">{proj.subtitle}</p>
              <p className="proj-desc">{proj.desc}</p>

              <ul className="proj-points">
                {proj.points.map((p, i) => (
                  <li key={i}>
                    <span className="pp-dot"></span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span className="proj-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
