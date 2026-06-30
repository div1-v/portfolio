import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaGraduationCap,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import './About.css';

const About = () => {
  // Experience calculation (June 2023 → Current Date)
  const startDate = new Date('2023-06-17');
  const currentDate = new Date();

  const experienceYears =
    currentDate.getFullYear() -
    startDate.getFullYear() -
    (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
        ? 1
        : 0
    );

  const experienceText = `${experienceYears}+`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-intro">
              <h3>Passionate Backend Engineer</h3>
              <p>
                I'm a dedicated Backend Engineer with {experienceText} years of
                experience building scalable and efficient systems. My passion
                lies in solving complex problems and creating robust solutions
                that serve thousands of users with high performance and
                reliability.
              </p>
              <p>
                I specialize in Java, Spring Boot, and cloud technologies, with
                a strong focus on database optimization, security, and
                performance tuning. I love working with modern technologies and
                always strive to learn and implement best practices.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <FaCode className="highlight-icon" />
                <div>
                  <h4>Clean Code</h4>
                  <p>
                    Writing maintainable and scalable code following best
                    practices
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <FaServer className="highlight-icon" />
                <div>
                  <h4>Scalable Systems</h4>
                  <p>
                    Building systems that can handle high traffic and concurrent
                    users
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <FaDatabase className="highlight-icon" />
                <div>
                  <h4>Database Optimization</h4>
                  <p>
                    Optimizing queries and database performance for better
                    efficiency
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <FaCloud className="highlight-icon" />
                <div>
                  <h4>Cloud Solutions</h4>
                  <p>Designing and implementing cloud-native applications</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-details" variants={itemVariants}>
            <div className="detail-card">
              <h4>Education</h4>
              <div className="education-item">
                <FaGraduationCap className="education-icon" />
                <div>
                  <h5>B.Tech in Computer Science</h5>
                  <p>Corporate Institute of Science and Technology, Bhopal</p>
                  <span>2019 - 2023 • CGPA: 8.1/10</span>
                </div>
              </div>
            </div>

            <div className="detail-card">
              <h4>Location</h4>
              <div className="location-item">
                <FaMapMarkerAlt className="location-icon" />
                <div>
                  <h5>Hyderabad, India</h5>
                  <p>Currently working at Plevenn</p>
                </div>
              </div>
            </div>
            <div className="detail-card">
              <h4>Experience</h4>
              <div className="experience-summary">
                <div className="exp-item">
                  <span className="exp-role">Backend Engineer</span>
                  <span className="exp-company">Plevenn</span>
                  <span className="exp-duration">
                    Dec 2025 - Present
                  </span>
                </div>

                <div className="exp-item">
                  <span className="exp-role">Software Engineer</span>
                  <span className="exp-company">Brainvire Infotech</span>
                  <span className="exp-duration">
                    June 2023 - Dec 2025
                  </span>
                </div>
                <p>
                  Experienced in building scalable backend platforms, optimizing
                  performance, designing cloud-native solutions, and delivering
                  high-availability systems across fintech and healthcare domains.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            <span className="stat-number">{experienceText}</span>
            <span className="stat-label">Years Experience</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Completed</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">35%</span>
            <span className="stat-label">Query Time Reduction</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">40%</span>
            <span className="stat-label">API Performance Boost</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;