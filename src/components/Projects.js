import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaNodeJs, FaReact, FaDatabase, FaCloud, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brevio Book Summary",
      description: "A comprehensive book summary platform with AI-powered auto-summaries, personalized search, and optimized media delivery.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center",
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Redis", "OpenAI", "GCP"],
      features: [
        "RESTful APIs with Spring Boot and Hibernate",
        "PostgreSQL with ts_vector and pg_vector for personalized search",
        "Redis caching reducing query time by 60%",
        "OpenAI integration for auto-generating summaries and embeddings",
        "Google Cloud Storage + CDN for optimized media delivery",
        "PostgreSQL replication and scheduled jobs for high availability"
      ],
      status: "Completed"
    },
    {
      id: 2,
      title: "Sing In Chinese",
      description: "An interactive language learning platform with gamified lessons, strong user retention, and automated engagement features.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=center",
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "AWS", "Firebase", "Redis"],
      features: [
        "Interactive language learning platform with gamified lessons",
        "RESTful APIs with optimized caching using Redis",
        "50% reduction in response times",
        "Secure media uploads with AWS S3 pre-signed URLs",
        "Role-based access control implementation",
        "Firebase Cloud Messaging for user engagement"
      ],
      status: "Live"
    },
    {
      id: 3,
      title: "AI Cleaner",
      description: "A serverless Gmail management tool with email categorization, bulk operations, and real-time synchronization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
      technologies: ["Node.js", "GCP Cloud Functions", "Gmail APIs", "Firestore", "OAuth2", "JWT"],
      features: [
        "Serverless backend using GCP Cloud Functions",
        "Gmail management with email categorization and bulk operations",
        "Secure REST endpoints with OAuth2 and JWT",
        "Optimized Firestore for efficient user data management",
        "Real-time synchronization using Gmail History API",
        "Dynamic email count updates"
      ],
      status: "Live"
    },
    {
      id: 4,
      title: "URL Shortener",
      description: "A comprehensive URL shortening service with analytics, custom aliases, and secure authentication.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      technologies: ["Node.js", "Redis", "MongoDB", "Google OAuth", "Express.js"],
      features: [
        "URL shortening with custom aliases support",
        "Link categorization by topics",
        "Comprehensive analytics tracking",
        "Usage trends by date, device, and OS",
        "Google OAuth for secure authentication",
        "MongoDB for data persistence"
      ],
      status: "Completed"
    },
    {
      id: 5,
      title: "Little Eats",
      description: "A personalized nutrition platform generating meal plans based on user preferences, allergies, and health goals.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&crop=center",
      technologies: ["JavaScript", "Firebase", "Firestore", "Cloud Functions", "GCP"],
      features: [
        "Personalized nutrition platform with meal plan generation",
        "User preference, allergy, and goal-based recommendations",
        "5+ Cloud Functions for real-time recommendations",
        "Optimized Firestore with indexing and schema design",
        "Firebase Auth for secure authentication",
        "Firestore transactions for conflict-free access"
      ],
      status: "Completed"
    }
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      'Java': FaJava,
      'Node.js': FaNodeJs,
      'React': FaReact,
      'PostgreSQL': FaDatabase,
      'MongoDB': FaDatabase,
      'Firestore': FaDatabase,
      'Redis': FaDatabase,
      'GCP': FaCloud,
      'AWS': FaCloud,
      'Firebase': FaCloud
    };
    return iconMap[tech] || FaCode;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Work</h2>
          <p className="projects-subtitle">
            Here are some of the projects I've worked on, showcasing my expertise in backend development, 
            cloud technologies, and scalable system architecture.
          </p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(project => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span key={index} className="tech-item">
                          <Icon className="tech-icon" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
