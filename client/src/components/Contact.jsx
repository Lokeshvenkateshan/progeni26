import React from "react";
import "../style/contact.css";
import { 
  FaUserTie, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaEnvelope,
  FaDirections 
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      {/* ===== HEADER ===== */}
      <div className="contact-header">
        {/* <h2 className="contact-title">Contact Us</h2> */}
        <h2 className="events-main-title">Contact Us</h2>
        <p className="contact-subtitle">
          Connect with the organizing team of Progeni
        </p>
      </div>

      {/* ===== TEAM CARDS ===== */}
      <div className="contact-grid">

        <div className="contact-card">
          <FaUserTie className="contact-icon-top" />
          <h3>Secretary</h3>
          <p className="contact-name">Yuvaraj</p>
          <a href="tel:+919999999999" className="contact-phone">
            <FaPhoneAlt /> +91 99999 99999
          </a>
        </div>

        <div className="contact-card">
          <FaUserTie className="contact-icon-top" />
          <h3>Co-Secretary</h3>
          <p className="contact-name">Swetha</p>
          <a href="tel:+919888888888" className="contact-phone">
            <FaPhoneAlt /> +91 98888 88888
          </a>
        </div>

        <div className="contact-card">
          <FaUserTie className="contact-icon-top" />
          <h3>Event Coordinator</h3>
          <p className="contact-name">Gaja</p>
          <a href="tel:+917777777777" className="contact-phone">
            <FaPhoneAlt /> +91 97777 77777
          </a>
        </div>

      </div>

      {/* ===== VENUE SECTION ===== */}
      <div className="contact-venue">
        <FaMapMarkerAlt className="venue-icon" />
        <h3>Venue</h3>
        <p>CSE Auditorium</p>

        <a
          href="https://www.google.com/maps/place/Department+of+Computer+Science+and+Engineering/@11.7134021,78.0875824,19.5z/data=!4m14!1m7!3m6!1s0x3babfb568f8493bb:0x2272d8cbb6f0112d!2sGCE+SALEM+,ECE+DEPARTMENT.!8m2!3d11.7138034!4d78.0871532!16s%2Fg%2F11jjyphcgh!3m5!1s0x3babfa3df7c8b3c1:0x963d35e115455bce!8m2!3d11.7137553!4d78.0879369!16s%2Fg%2F12640phkz?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
        >
          <FaDirections /> Get Directions
        </a>
      </div>

      {/* ===== SOCIAL ===== */}
      <div className="contact-social">
        <a 
          href="https://instagram.com/progeni" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram /> @progeni
        </a>

        <a 
          href="mailto:progeni@email.com" 
          className="social-link"
        >
          <FaEnvelope /> progeni@email.com
        </a>
      </div>

    </section>
  );
};

export default Contact;
