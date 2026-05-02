import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    color: '#00d4ff',
    skills: ['AWS Cloud Services', 'DevOps Automation', 'Serverless Architecture', 'Auto-scaling', 'Load Balancing'],
  },
  {
    category: 'Security',
    icon: '🔒',
    color: '#10b981',
    skills: ['Network Security', 'Ethical Hacking & Penetration Testing', 'Risk Assessment & Management', 'Digital Forensics', 'Malware Analysis'],
  },
  {
    category: 'Development',
    icon: '💻',
    color: '#a78bfa',
    skills: ['Programming & Scripting', 'Backend API Development', 'Serverless Functions', 'System Design'],
  },
  {
    category: 'Core Competencies',
    icon: '🧠',
    color: '#f59e0b',
    skills: ['Analytical Thinking', 'Data Structures & Algorithms', 'Communication & Collaboration', 'Adaptability & Resilience', 'Problem Solving'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">04. Skills</div>
          <h2 className="section-title">
            My <span className="outline">Toolkit</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category} style={{ '--grp-color': group.color }}>
              <div className="skill-group-header">
                <span className="grp-icon">{group.icon}</span>
                <h3 className="grp-title">{group.category}</h3>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
