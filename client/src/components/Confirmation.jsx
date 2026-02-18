import React from "react";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style/confirmation.css";
import Lottie from "lottie-react"
import successAnimation from "../assets/goanim.json"
const Confirmation = ({ formData }) => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");   // Redirect to Home
  };

  return (
    <div className="confirm-container">

      <h2 className="confirm-title">Registration Confirmed</h2>

      <div className="confirm-card">

        {/* Success Icon */}
{/*         <FaCheckCircle className="confirm-icon" />
 */}     
        <div className="confirm-lottie">
          <Lottie 
            animationData={successAnimation} 
            loop={true} 
          />
        </div>
        <h3 className="confirm-pro">
          Progeni ID: <span>{formData.pro_number}</span>
        </h3>

        {/* Participant Name */}
        <div className="confirm-section">
          <p><FaUser /> {formData.name}</p>
        </div>

        {/* Events */}
        <div className="confirm-section">
          <h4>Tech Events</h4>
          {formData.techEvents?.length > 0 ? (
            formData.techEvents.map((event, i) => (
              <span key={i} className="event-pill">{event}</span>
            ))
          ) : (
            <p>None</p>
          )}
        </div>

        <div className="confirm-section">
          <h4>Non-Tech Events</h4>
          {formData.nonTechEvents?.length > 0 ? (
            formData.nonTechEvents.map((event, i) => (
              <span key={i} className="event-pill">{event}</span>
            ))
          ) : (
            <p>None</p>
          )}
        </div>

        {/* Thank You Message */}
        <div className="confirm-thanks">
          <p>✨ Thanks for registering!</p>
          <p>Keep in touch with us for updates and event details.</p>
        </div>

        {/* OKAY BUTTON */}
        <button className="confirm-btn" onClick={handleRedirect}>
          OKAY
        </button>

      </div>
    </div>
  );
};

export default Confirmation;
