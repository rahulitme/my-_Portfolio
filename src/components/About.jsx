import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate software developer with 1 year of professional experience 
            building modern web applications. I specialize in creating responsive, 
            user-friendly interfaces and scalable backend solutions.
          </p>
          <p className="about-text">
            My journey in software development has equipped me with strong problem-solving 
            skills and a keen eye for detail. I'm constantly learning new technologies 
            and best practices to deliver high-quality code.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3 className="stat-number">1+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Technologies</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
          <div className="education">
            <h3 className="education-title">Education</h3>
            <div className="education-item">
              <h4 className="degree-name">Master of Computer Applications (MCA)</h4>
              <p className="university">Visvesvaraya Technological University, Bangalore</p>
              <p className="cgpa">CGPA: 8.4/10</p>
              <p className="graduation-year">2024</p>
            </div>
            <div className="education-item">
              <h4 className="degree-name">Bachelor of Computer Applications (BCA)</h4>
              <p className="university">Vinoba Bhave University, Hazaribagh</p>
              <p className="cgpa">CGPA: 7.67/10</p>
              <p className="graduation-year">2022</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rahul-kumar-191473256/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              LinkedIn
            </a>
            <a href="https://github.com/rahulitme" target="_blank" rel="noopener noreferrer" className="social-link github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
