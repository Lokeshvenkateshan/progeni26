import React, { useState } from "react";
import "../style/eselect.css";

import {
  FaCode,
  FaBug,
  FaBrain,
  FaRocket,
  FaRunning,
  FaGamepad,
  FaPalette,
  FaDice
} from "react-icons/fa";

const techList = [
  { name: "Logic Crypt", icon: <FaBrain /> },
  { name: "NormX", icon: <FaCode /> },
  { name: "Byte To Billion", icon: <FaRocket /> },
  { name: "Prompt Fury", icon: <FaBug /> }
];

const nonTechList = [
  { name: "Pixel Paradox", icon: <FaPalette /> },
  { name: "Glitch Run", icon: <FaRunning /> },
  { name: "Neon Numerix", icon: <FaDice /> },
  { name: "Cyber Spin", icon: <FaGamepad /> }
];

const EventSelection = ({ formData, setFormData, nextStep, prevStep }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const handleSelection = (type, event) => {
    const selected = formData[type];

    if (selected.includes(event)) {
      setFormData({
        ...formData,
        [type]: selected.filter(e => e !== event)
      });
    } else {
      if (selected.length >= 2) {
        setModalMsg(`Only 2 ${type === "techEvents" ? "Technical" : "Non-Technical"} events allowed`);
        setShowModal(true);
        return;
      }

      setFormData({
        ...formData,
        [type]: [...selected, event]
      });
    }
  };

  const isValid =
    formData.techEvents.length === 2 &&
    formData.nonTechEvents.length === 2;

  const handleNext = () => {
    if (!isValid) {
      setModalMsg("Please select exactly 2 Technical and 2 Non-Technical events");
      setShowModal(true);
      return;
    }

    nextStep();
  };

  return (
    <div className="e-register-container">
      <h2 className="e-event-title">Choose Events</h2>

      <div className="e-events-grid">

        {/* TECH */}
        <div className="e-event-section">
          <div className="e-section-header">
            <h2>Technical Events</h2>
            <span>{formData.techEvents.length} / 2 selected</span>
          </div>

          <div className="e-cards">
            {techList.map(event => (
              <div
                key={event.name}
                className={`e-event-card ${formData.techEvents.includes(event.name) ? "e-selected" : ""
                  }`}
                onClick={() => handleSelection("techEvents", event.name)}
              >
                <span className="e-icon">{event.icon}</span>
                {event.name}
              </div>
            ))}
          </div>
        </div>

        {/* NON TECH */}
        <div className="e-event-section">
          <div className="e-section-header">
            <h2>Non-Technical Events</h2>
            <span>{formData.nonTechEvents.length} / 2 selected</span>
          </div>

          <div className="e-cards">
            {nonTechList.map(event => (
              <div
                key={event.name}
                className={`e-event-card ${formData.nonTechEvents.includes(event.name) ? "e-selected" : ""
                  }`}
                onClick={() => handleSelection("nonTechEvents", event.name)}
              >
                <span className="e-icon">{event.icon}</span>
                {event.name}
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="e-button-group">
        {prevStep && (
          <button className="e-back-btn" onClick={prevStep}>
            Back
          </button>
        )}
        <button
          className={`e-next-btn ${isValid ? "e-enabled" : ""}`}
          onClick={handleNext}
        >
          NEXT: PAYMENT
        </button>
      </div>

      {showModal && (
        <div className="e-modal-overlay">
          <div className="e-modal-box">
            <p>{modalMsg}</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSelection;
