import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaCloud, FaArrowRight, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-bg-elements">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
          <div className="bg-grid"></div>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-left">
            {/* Badge */}
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-icon">👋</span>
              <span>Available for opportunities</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">Divyansh Patel</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Backend Engineer & Problem Solver
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I build robust, scalable backend systems using Java, Spring Boot, and cloud technologies. 
              Passionate about creating efficient solutions that handle high-traffic applications with 99.9% uptime.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div 
              className="tech-pills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="tech-pill">Java</span>
              <span className="tech-pill">Spring Boot</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">AWS</span>
              <span className="tech-pill">Docker</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <FaCode className="btn-icon" />
                View My Work
                <FaArrowRight className="btn-arrow" />
              </button>
              
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <FaEnvelope className="btn-icon" />
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="social-label">Follow me:</span>
              <div className="social-links">
                <a href="https://github.com/div1-v" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/divyansh-patel-b542a1241/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="mailto:idivyansh22@gmail.com" className="social-link">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Visual */}
          <div className="hero-right">
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Main Card */}
              <div className="visual-card main-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="card-title">Backend Systems</span>
                </div>
                <div className="card-content">
                  <div className="code-line">
                    <span className="code-keyword">@RestController</span>
                    <span className="code-text">public class</span>
                  </div>
                  <div className="code-line">
                    <span className="code-class">UserController</span>
                    <span className="code-bracket">{'{'}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-annotation">@GetMapping</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-method">getUsers()</span>
                    <span className="code-bracket">{'{'}</span>
                  </div>
                  <div className="code-line double-indent">
                    <span className="code-return">return</span>
                    <span className="code-text">userService.findAll();</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-bracket">{'}'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{'}'}</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                className="floating-card card-1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaServer className="card-icon" />
                <span>API Design</span>
              </motion.div>

              <motion.div 
                className="floating-card card-2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaDatabase className="card-icon" />
                <span>Database</span>
              </motion.div>

              <motion.div 
                className="floating-card card-3"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaCloud className="card-icon" />
                <span>Cloud</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
