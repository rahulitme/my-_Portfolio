import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillCategoriesRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Agile/Scrum', level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const skillBars = skillCategoriesRef.current?.querySelectorAll('.skill-progress');
    const skillCategories = skillCategoriesRef.current?.querySelectorAll('.skill-category');
    
    if (skillCategories && skillCategories.length > 0) {
      // Set initial state to ensure visibility
      gsap.set(skillCategories, { opacity: 1, y: 0 });
      
      // Stagger animation for skill categories
      gsap.fromTo(skillCategories,
        {
          opacity: 0,
          y: 30
        },
        {
          scrollTrigger: {
            trigger: skillCategoriesRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2
        }
      );
    }

    if (skillBars && skillBars.length > 0) {
      // Animate skill progress bars when scrolled into view
      skillBars.forEach((bar, index) => {
        const skillLevel = bar.getAttribute('data-level');
        
        gsap.fromTo(bar,
          {
            width: 0
          },
          {
            scrollTrigger: {
              trigger: bar,
              start: 'top center+=50',
              toggleActions: 'play none none none'
            },
            width: `${skillLevel}%`,
            duration: 1.2,
            delay: index * 0.05,
            ease: 'power2.out'
          }
        );

        // Animate the percentage counter
        const percentSpan = bar.parentElement.querySelector('.skill-percentage');
        if (percentSpan) {
          gsap.to(
            percentSpan,
            {
              textContent: skillLevel,
              scrollTrigger: {
                trigger: bar,
                start: 'top center+=50',
                toggleActions: 'play none none none'
              },
              duration: 1.2,
              delay: index * 0.05,
              ease: 'power2.out',
              snap: { textContent: 1 },
              onUpdate: function() {
                percentSpan.textContent = Math.round(this.progress() * skillLevel) + '%';
              }
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies and tools I work with on a daily basis
        </p>
        <div className="skills-grid" ref={skillCategoriesRef}>
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">0%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
