import './Hero.css';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import photo from '../assets/photo.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const heroImageRef = useRef(null);
  const buttonsRef = useRef(null);

  const roles = ['Frontend Developer', 'React Developer', 'UI Developer', 'Full Stack Developer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    setIsVisible(true);
    
    // GSAP animations
    const tl = gsap.timeline();
    
    // Animate hero image with rotation and scale
    tl.from(heroImageRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, 0);

    // Animate buttons
    tl.from(buttonsRef.current?.querySelectorAll('.cta-button, .secondary-button'), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, 0.3);

    // Add floating animation to hero image
    gsap.to(heroImageRef.current?.querySelector('.image-placeholder'), {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    });

    // Add pulsing animation to circles
    gsap.to('.circle-bg', {
      scale: 1.1,
      opacity: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: 'sine.inOut'
    });
  }, []);

  useEffect(() => {
    let timer;
    const currentRole = roles[loopNum % roles.length];

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'animate' : ''}`}>
          <p className="hero-greeting animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm
          </p>
          <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero-name typing-effect">{displayText}</span>
            <span className="typing-cursor">|</span>
          </h1>
          <p className="hero-text animate-slide-up" style={{ animationDelay: '0.3s' }}>
            I'm a passionate software developer with 1 year of experience building modern, 
            responsive web applications. I specialize in React, Node.js, and creating 
            seamless user experiences with clean, efficient code.
          </p>
          <div className="hero-buttons animate-slide-up" ref={buttonsRef} style={{ animationDelay: '0.4s' }}>
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
        <div className={`hero-image ${isVisible ? 'animate' : ''}`} ref={heroImageRef}>
          <div className="image-placeholder animate-float">
            <img
              className="hero-photo"
              src={photo}
              alt="Portrait"
              loading="eager"
            />
          </div>
          {/* Animated circles background */}
          <div className="circle-bg circle-1"></div>
          <div className="circle-bg circle-2"></div>
          <div className="circle-bg circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
