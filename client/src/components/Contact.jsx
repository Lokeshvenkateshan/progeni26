import React, { useState, useEffect } from "react";
import "../style/contact.css";
import { 
  FaUserTie, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaEnvelope,
  FaDirections,
  FaCopy,
  FaCheck
} from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  

  // Team data - easily configurable
  const teamMembers = [
    {
      id: 1,
      role: "Secretary",
      name: "Yuvaraj",
      phone: "+918072467509",
      formattedPhone: "+91 80724 67509"
    },
    {
      id: 2,
      role: "Co-Secretary",
      name: "Swetha",
      phone: "+917358931344",
      formattedPhone: "+91 73589 31344"
    },
    {
      id: 3,
      role: "OEC",
      name: "Dhiliban",
      phone: "+916369385748",
      formattedPhone: "+91 63693 85748"
    }
  ];

  // Copy to clipboard handler

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mouse move handler for glow effect
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      className={`contact-section ${isVisible ? 'animate-in' : ''}`} 
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* ===== HEADER ===== */}
      <header className="contact-header">
        <h2 id="contact-heading" className="events-main-title">
          Contact Us
          <span className="title-glow" aria-hidden="true"></span>
        </h2>
        <p className="contact-subtitle">
          Connect with the organizing team of <strong>Progeni</strong>
        </p>
      </header>

      {/* ===== TEAM CARDS ===== */}
      <div className="contact-grid">
        {teamMembers.map((member, index) => (
          <article 
            key={member.id} 
            className="contact-card"
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseMove={handleMouseMove}
          >
            <FaUserTie className="contact-icon-top" aria-hidden="true" />
            <h3 className="card-role">{member.role}</h3>
            <p className="contact-name">{member.name}</p>
            
            <div className="contact-actions">
              <a 
                href={`tel:${member.phone}`} 
                className="contact-phone"
                aria-label={`Call ${member.name} at ${member.formattedPhone}`}
              >
                <FaPhoneAlt aria-hidden="true" /> 
                <span>{member.formattedPhone}</span>
              </a>
              
              
            </div>
            
            {/* Hover glow effect */}
            <span className="card-glow" aria-hidden="true"></span>
          </article>
        ))}
      </div>

      {/* ===== VENUE SECTION ===== */}
      <div className="contact-venue">
        <FaMapMarkerAlt className="venue-icon" aria-hidden="true" />
        <h3>Venue</h3>
        <p className="venue-name">Main Auditorium</p>
        <p className="venue-address">Government College of Engineering, Salem</p>

        <a
          href="https://maps.app.goo.gl/FgdA366p2pibRNNk8"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
          aria-label="Get directions to CSE Auditorium on Google Maps"
        >
          <FaDirections aria-hidden="true" /> 
          <span>Get Directions</span>
          <span className="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>

      {/* ===== SOCIAL LINKS ===== */}
      <div className="contact-social" role="navigation" aria-label="Social media links">
        <a 
          href="https://www.instagram.com/progeni26" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link instagram"
          aria-label="Follow Progeni on Instagram"
        >
          <FaInstagram aria-hidden="true" /> 
          <span>@progeni</span>
          <span className="social-glow" aria-hidden="true"></span>
        </a>

        <a 
          href="mailto:progeni26.gce@gmail.com" 
          className="social-link email"
          aria-label="Email Progeni team"
        >
          <FaEnvelope aria-hidden="true" /> 
          <span>progeni26.gce@gmail.com</span>
          <span className="social-glow" aria-hidden="true"></span>
        </a>
      </div>

      
    </section>
  );
};

export default Contact;