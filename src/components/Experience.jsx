import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Campaign Harvest',
      period: 'Sep 2025 – March 2026',
      responsibilities: [
        'Developed and maintained scalable web applications using React.js, Node.js, and Express.js.',
        'Designed and implemented RESTful APIs, enabling seamless communication between frontend and backend systems.',
        'Integrated APIs with frontend interfaces to ensure smooth data flow and real-time updates.'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Zylentrix Ltd',
      period: 'March 2025 – Sep 2025',
      responsibilities: [
        'Built real-world web applications using React and Next.js for a digital marketing platform (DigiZign) at a UK-based company.',
        'Developed real-time analytics dashboards to track campaign performance and user engagement.',
        'Improved page load time through strategic lazy loading and code splitting implementation.'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Code Inbound LLP',
      period: 'Nov 2024 – Feb 2025',
      responsibilities: [
        'Developed interactive real-time dashboards for Network Monitoring System (NMS) using React.js and TypeScript, improving UI responsiveness.',
        'Integrated REST APIs to support real-time data visualization across all monitoring dashboards.',
        'Implemented device discovery, SNMP/ICMP monitoring, and bandwidth/traffic tracking.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Visvesvaraya Technological University, Bangalore',
      period: '2024',
      achievements: [
        'CGPA: 8.4/10'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Vinoba Bhave University, Hazaribagh',
      period: '2022',
      achievements: [
        'CGPA: 7.67/10'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline">
          <div className="timeline-section">
            <h3 className="timeline-heading">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z" fill="currentColor"/>
              </svg>
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{exp.title}</h4>
                  <div className="timeline-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  {exp.location && <p className="location">{exp.location}</p>}
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-section">
            <h3 className="timeline-heading">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor"/>
              </svg>
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <div className="timeline-meta">
                    <span className="company">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <ul className="responsibilities">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
