import { useMemo, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeType, setActiveType] = useState('all');

  const projects = [
    {
      id: 'dashboard-ui',
      title: 'Dashboard UI',
      description: 'A modern and responsive dashboard UI created with React and ShadCN UI components, showcasing data visualization and user interface design.',
      technologies: ['React', 'ShadCN UI', 'Tailwind CSS'],
      githubUrl: 'https://github.com/rahulitme/Dashboard-UI',
      deployUrl: 'https://dashboard-ui-roan.vercel.app/',
      type: 'web',
      image: 'https://placehold.co/600x400/E0E0E0.png',
      dataAiHint: 'dashboard data'
    },
    {
      id: 'fit-and-finder',
      title: 'FIT AND FINDER',
      description: 'The Fit and Finder mobile app leverages Dart and Firebase to provide personalized clothing recommendations based on facial analysis.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: 'https://github.com/rahulitme/Final_Year_Project',
      type: 'mobile',
      image: 'https://placehold.co/600x400/D6EAF8.png',
      dataAiHint: 'fashion mobile'
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and Next.js. Features dynamic content loading, dark mode support, and seamless animations.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/rahulitme/myportfolio',
      type: 'web',
      image: 'https://placehold.co/600x400/D1F2EB.png',
      dataAiHint: 'portfolio website'
    },
    {
      id: 'grocery-app',
      title: 'Grocery App',
      description: 'A comprehensive mobile application that transforms grocery shopping with features like product browsing, cart management, order tracking, and seamless payments.',
      technologies: ['Flutter', 'Dart', 'State Management'],
      githubUrl: 'https://github.com/rahulitme/Grocery-App',
      type: 'mobile',
      image: 'https://placehold.co/600x400/FDEDEC.png',
      dataAiHint: 'ecommerce mobile'
    },
    {
      id: 'customer-feedback-form',
      title: 'Customer Feedback Form',
      description: 'A web-based Feedback Form built with React and Firebase to collect feedback from customers.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/rahulitme/-customers-_survey',
      deployUrl: 'https://customers-survey-5j16.vercel.app/',
      type: 'web',
      image: 'https://placehold.co/600x400/FCF3CF.png',
      dataAiHint: 'feedback form'
    },
    {
      id: 'traveling-web-app',
      title: 'Traveling Web App',
      description: 'Travel web app providing features like best places discovery, user guidance, hotel inquiries, and global destination information.',
      technologies: ['React', 'CSS', 'Bootstrap', 'Firebase'],
      githubUrl: 'https://github.com/rahulitme/Travel-web-application',
      deployUrl: 'https://travel-web-application.vercel.app/',
      type: 'web',
      image: 'https://placehold.co/600x400/E8DAEF.png',
      dataAiHint: 'travel booking'
    },
    {
      id: 'clock-app',
      title: 'Clock App',
      description: 'A sophisticated daily reminder application that helps users manage their schedule. Features include customizable time picker, daily notifications, and persistent storage.',
      technologies: ['Flutter', 'Dart', 'Local Storage'],
      githubUrl: 'https://github.com/rahulitme/Daily_Reminder_App',
      deployUrl: 'https://welcome-aa71e.web.app',
      type: 'mobile',
      image: 'https://placehold.co/600x400/D5F5E3.png',
      dataAiHint: 'reminder clock'
    },
    {
      id: 'library-management-system',
      title: 'Library Management System',
      description: 'A web-based library management system that shows details about college resources and information.',
      technologies: ['React', 'Node.js'],
      githubUrl: 'https://github.com/rahulitme/library-management',
      type: 'web',
      image: 'https://placehold.co/600x400/FAE5D3.png',
      dataAiHint: 'library system'
    },
    {
      id: 'weather-application',
      title: 'Weather Application',
      description: 'A Weather application that provides real-time weather updates and forecasts for any location.',
      technologies: ['React', 'OpenWeather API'],
      githubUrl: 'https://github.com/rahulitme/Weather_Web_app',
      type: 'web',
      image: 'https://placehold.co/600x400/CFD8DC.png',
      dataAiHint: 'weather forecast'
    },
    {
      id: 'bluetooth-beacon-app',
      title: 'Bluetooth Beacon App',
      description: 'An innovative application for detecting and managing nearby Bluetooth devices. The app provides real-time device discovery and connection management capabilities.',
      technologies: ['Flutter', 'Dart', 'Bluetooth API'],
      githubUrl: 'https://github.com/rahulitme/-Bluetooth-_beacon_App',
      type: 'mobile',
      image: 'https://placehold.co/600x400/FDEBD0.png',
      dataAiHint: 'bluetooth beacon'
    },
    {
      id: 'event-application',
      title: 'Event Application',
      description: 'A secure event management platform featuring phone authentication for user verification. The app streamlines event access and management while maintaining high security standards.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth'],
      githubUrl: 'https://github.com/rahulitme/Event_Application',
      type: 'mobile',
      image: 'https://placehold.co/600x400/EAEDED.png',
      dataAiHint: 'event mobile'
    },
    {
      id: 'blog-application',
      title: 'Blog Application',
      description: 'A full-stack blog application featuring CRUD operations for creating, reading, updating, and deleting blog posts. Built with modern web technologies for seamless content management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      deployUrl: 'https://v0-blog-website-requirements-rho.vercel.app/',
      githubUrl: 'https://github.com/rahulitme/Crud-operations',
      type: 'web',
      image: 'https://placehold.co/600x400/EAEDED.png',
      dataAiHint: 'blog content'
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Management',
      description: 'A comprehensive hotel management system that allows users to browse available rooms, make reservations, and manage bookings. Features an intuitive interface for both guests and hotel administrators.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      deployUrl: 'https://rahulitme.github.io/Hotel-Management/',
      githubUrl: 'https://github.com/rahulitme/Hotel-Management',
      type: 'web',
      image: 'https://placehold.co/600x400/EAEDED.png',
      dataAiHint: 'hotel booking'
    },
    {
      id: 'movie-recommendation',
      title: 'Movie Recommendation',
      description: 'An intelligent movie recommendation system powered by AI that suggests personalized movies based on user preferences and viewing history. Features movie search, ratings, and detailed information.',
      technologies: ['React', 'IMDb', 'Gemini API'],
      deployUrl: 'https://gemini-movie-verse.vercel.app/',
      githubUrl: 'https://github.com/rahulitme/gemini-movie-verse',
      type: 'web',
      image: 'https://placehold.co/600x400/EAEDED.png',
      dataAiHint: 'movie recommendation'
    },
    {
      id: 'interview-schedule-web-app',
      title: 'Interview Schedule Web App',
      description: 'A web application for scheduling and managing interviews. It allows users to book, reschedule, and cancel interviews while providing notifications and reminders.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      deployUrl: 'https://interview-schedule-web-app.vercel.app/',
      githubUrl: 'https://github.com/rahulitme/interview-schedule-web-app',
      type: 'web',
      image: 'https://placehold.co/600x400/EAEDED.png',
      dataAiHint: 'interview scheduling'
    },
    {
      id: 'staff-profile-management',
      title: 'Staff Profile Management',
      description: 'A web application for managing staff profiles, including creating, viewing, and updating staff information.',
      technologies: ['React', 'Tailwind CSS'],
      deployUrl: 'https://v0-vite-react-setup-ten.vercel.app/',
      githubUrl: 'https://github.com/rahulitme/Staff-profile-Create',
      type: 'web',
      image: 'https://placehold.co/600x400/EAEDED.png',
      dataAiHint: 'staff management'
    }
  ];

  const projectTypes = useMemo(
    () => ['all', ...Array.from(new Set(projects.map((project) => project.type)))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    if (activeType === 'all') return projects;
    return projects.filter((project) => project.type === activeType);
  }, [activeType, projects]);

  const getTechIcon = (tech) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react') || lowerTech.includes('vite')) return '⚛️';
    if (lowerTech.includes('node') || lowerTech.includes('express')) return '🟢';
    if (lowerTech.includes('mongo') || lowerTech.includes('firebase') || lowerTech.includes('postgresql')) return '🗄️';
    if (lowerTech.includes('tailwind') || lowerTech.includes('css')) return '🎨';
    if (lowerTech.includes('javascript') || lowerTech.includes('typescript')) return '📜';
    if (lowerTech.includes('socket')) return '🔌';
    return '⚡';
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        <div className="projects-filters">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`filter-btn ${activeType === type ? 'active' : ''}`}
              onClick={() => setActiveType(type)}
            >
              {type === 'all' ? 'All Projects' : `${type.charAt(0).toUpperCase()}${type.slice(1)} Apps`}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${expandedCard === index ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="project-image-wrapper">
                <div className="project-image">
                  {project.image ? (
                    <img
                      className="project-image-img"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      data-ai-hint={project.dataAiHint}
                    />
                  ) : null}
                  <div className="image-overlay">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor" opacity="0.3"/>
                    </svg>
                  </div>
                  <div className="image-hover-overlay">
                    <div className="view-image-text">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span>View Image</span>
                    </div>
                  </div>
                </div>
                <div className="project-type-badge">{project.type === 'web' ? 'Web' : 'Mobile'}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <h4 className="technologies-label">Technologies:</h4>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        <span className="tech-icon">{getTechIcon(tech)}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.deployUrl && (
                    <a href={project.deployUrl} className="project-link deploy-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
