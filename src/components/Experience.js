import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaServer, FaDatabase, FaCloud, FaShieldAlt, FaRocket } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Brainvire Infotech",
      location: "Ahmedabad, India",
      duration: "June 2023 – Present",
      achievements: [
        "Developed scalable backend platforms with Java, Spring Boot, Hibernate, PostgreSQL, and MongoDB, serving high-traffic applications",
        "Architected cloud-native solutions on GCP (Firestore, Pub/Sub) with 99.9% uptime, automating workflows via scheduled tasks and database triggers",
        "Implemented secure Auth using Spring Security, OAuth 2.0, and JWT ensuring zero unauthorized access",
        "Optimized databases with schema redesign, normalization, and indexing, reducing query times by 35% and improving throughput",
        "Integrated AI APIs (OpenAI, Gemini) for auto-summaries, semantic search, and chatbots",
        "Boosted API performance by 40% via caching, code optimizations, and asynchronous processing, and reduced feature delivery time by 25% through cross-team collaboration and AI usage"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "MongoDB", "GCP", "Firestore", "OAuth 2.0", "JWT", "OpenAI", "Redis"]
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="experience-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Core Expertise</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <FaCode className="highlight-icon" />
              <h4>Backend Development</h4>
              <p>Building robust and scalable backend systems with Java and Spring Boot</p>
            </div>
            <div className="highlight-card">
              <FaDatabase className="highlight-icon" />
              <h4>Database Optimization</h4>
              <p>Optimizing database performance and designing efficient schemas</p>
            </div>
            <div className="highlight-card">
              <FaCloud className="highlight-icon" />
              <h4>Cloud Architecture</h4>
              <p>Designing and implementing cloud-native solutions on GCP</p>
            </div>
            <div className="highlight-card">
              <FaShieldAlt className="highlight-icon" />
              <h4>Security Implementation</h4>
              <p>Implementing secure authentication and authorization systems</p>
            </div>
            <div className="highlight-card">
              <FaRocket className="highlight-icon" />
              <h4>Performance Tuning</h4>
              <p>Optimizing system performance and reducing response times</p>
            </div>
            <div className="highlight-card">
              <FaServer className="highlight-icon" />
              <h4>Microservices</h4>
              <p>Building and maintaining microservices architecture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
