import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/div1-v' },
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/divyansh-patel-b542a1241/' },
      { name: 'Email', icon: FaEnvelope, href: 'mailto:idivyansh22@gmail.com' }
    ],
    contact: [
      { icon: FaEnvelope, text: 'idivyansh22@gmail.com', href: 'mailto:idivyansh22@gmail.com' },
      { icon: FaMapMarkerAlt, text: 'Ahmedabad, India', href: '#' },
      { icon: FaCode, text: 'Backend Engineer', href: '#' }
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <span className="logo-text">DP</span>
            </div>
            <h3>Divyansh Patel</h3>
            <p>Backend Engineer passionate about building scalable and efficient systems with Java, Spring Boot, and cloud technologies.</p>
            
            {/* Contact Info */}
            <div className="contact-info">
              {footerLinks.contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="contact-item">
                    <Icon className="contact-icon" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect With Me</h4>
            <p>Let's connect and discuss opportunities!</p>
            <div className="social-links">
              {footerLinks.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="social-link"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Divyansh Patel. All rights reserved.</p>
            <p>Built with React.js and lots of ☕</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
