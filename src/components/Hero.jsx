import './Hero.css';
 
const GITHUB_PROFILE_IMAGE = 'https://github.com/rahulitme.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">
            Hi, I'm
          </p>
          <h1 className="hero-title">
            <span className="hero-name">Rahul Kumar</span>
          </h1>
          <p className="hero-text">
            I'm a passionate software developer with 1 year of experience building modern, 
            responsive web applications. I specialize in React, Node.js, and creating 
            seamless user experiences with clean, efficient code.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">
              Let's get started
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#projects" className="secondary-button">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img
              className="hero-photo"
              src={GITHUB_PROFILE_IMAGE}
              alt="Portrait"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
