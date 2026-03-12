import React from "react";
import "../style/modal.css";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegistrationModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="reg-modal-overlay">
      <div className="reg-modal">

        <div className="blob"></div>

        <div className="modal-content">

          <h2 className="mod-h">
            <FaExclamationCircle className="modal-icon" />
            Registration Closing Very Soon
          </h2>

          <p className="modd-p">
           Only a few slots remain for online registration.
          </p>

          <button
            className="modal-btn"
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>

          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>

        </div>

      </div>
    </div>
  );
};

export default RegistrationModal;