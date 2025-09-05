import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaNodeJs, FaJs, FaDatabase, FaServer, 
  FaCloud, FaDocker, FaGitAlt, FaAws, FaGoogle, FaShieldAlt, 
  FaRocket, FaCogs, FaCode, FaFlask
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "#667eea",
      skills: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
        { name: "TypeScript", icon: FaJs, color: "#3178c6" }
      ]
    },
    {
      title: "Backend Technologies",
      icon: FaServer,
      color: "#764ba2",
      skills: [
        { name: "Spring Boot", icon: FaJava, color: "#6db33f" },
        { name: "Hibernate", icon: FaDatabase, color: "#59666c" },
        { name: "Spring Security", icon: FaShieldAlt, color: "#6db33f" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: FaNodeJs, color: "#000000" },
        { name: "JUnit", icon: FaFlask, color: "#25a162" }
      ]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      color: "#f093fb",
      skills: [
        { name: "PostgreSQL", icon: FaDatabase, color: "#336791" },
        { name: "MongoDB", icon: FaDatabase, color: "#47a248" },
        { name: "MySQL", icon: FaDatabase, color: "#4479a1" },
        { name: "Redis", icon: FaDatabase, color: "#dc382d" },
        { name: "Firestore", icon: FaDatabase, color: "#ff6f00" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      color: "#f5576c",
      skills: [
        { name: "Google Cloud Platform", icon: FaGoogle, color: "#4285f4" },
        { name: "AWS", icon: FaAws, color: "#ff9900" },
        { name: "Docker", icon: FaDocker, color: "#2496ed" },
        { name: "Firebase", icon: FaGoogle, color: "#ffca28" },
        { name: "CI/CD", icon: FaRocket, color: "#6c757d" }
      ]
    },
    {
      title: "Tools & Others",
      icon: FaCogs,
      color: "#4facfe",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#f05032" },
        { name: "Maven", icon: FaJava, color: "#c71a36" },
        { name: "Terraform", icon: FaCloud, color: "#623ce4" },
        { name: "SonarQube", icon: FaShieldAlt, color: "#4e9bcf" },
        { name: "OpenAI APIs", icon: FaCode, color: "#412991" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          className="skills-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            With 2+ years of experience in backend development, I've mastered a wide range of technologies 
            and tools across different domains.
          </p>
        </motion.div>
        
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div 
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
                style={{ '--category-color': category.color }}
              >
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <CategoryIcon className="category-icon" />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div 
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="skill-icon-wrapper">
                          <SkillIcon 
                            className="skill-icon" 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-item">
                <FaRocket className="achievement-icon" />
                <div>
                  <h4>Performance Optimization</h4>
                  <p>40% API performance boost</p>
                </div>
              </div>
              <div className="achievement-item">
                <FaDatabase className="achievement-icon" />
                <div>
                  <h4>Database Optimization</h4>
                  <p>35% reduction in query times</p>
                </div>
              </div>
              <div className="achievement-item">
                <FaServer className="achievement-icon" />
                <div>
                  <h4>Scalable Systems</h4>
                  <p>99.9% uptime and reliability</p>
                </div>
              </div>
              <div className="achievement-item">
                <FaShieldAlt className="achievement-icon" />
                <div>
                  <h4>Security Implementation</h4>
                  <p>Zero unauthorized access</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
