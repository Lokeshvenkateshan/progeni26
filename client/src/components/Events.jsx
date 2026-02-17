import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/events.css";

const techEvents = [
  {
    id: 1,
    title: "Logic Crypt",
    desc: "Logical thinking and problem-solving",
  },
  {
    id: 2,
    title: "NormX",
    desc: "Design scalable and structured databases.",
  },
  {
    id: 3,
    title: "Byte To Billion",
    desc: "Pitch innovative tech-driven startup ideas.",
  },
  {
    id: 4,
    title: "Prompt Fury",
    desc: "Build apps using AI-powered prompting.",
  },
];
const nonTechEvents = [
  {
    id: 6,
    title: "Glitch Run",
    desc: "Treasure hunt of clues and challenges.",
  },
  {
    id: 7,
    title: "Pixel Paradox",
    desc: "Decode, observe, and express creatively.",
  },
  {
    id: 8,
    title: "Neon Numerix",
    desc: "Music, math, and rapid-fire thinking.",
  },
  {
    id: 9,
    title: "Cyber Spin",
    desc: "Luck, suspense, and elimination gameplay.",
  },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="events-section" id="events">
      {/* ===== MAIN TITLE ===== */}
      <div className="events-header">
        <h2 className="events-main-title">Our Events</h2>
        <p className="events-subtitle">
          Explore the arenas of innovation and creativity.
        </p>
      </div>

      {/* ===== TECH EVENTS ===== */}
      <div className="events-category">
        <h3 className="events-category-title">Tech Events</h3>

        <div className="events-grid">
          {techEvents.map((event) => (
            <div key={event.id} className="events-card">
              <h4 className="events-card-title">{event.title}</h4>
              <div className="events-card-line"></div>
              <p className="events-card-desc">{event.desc}</p>
              <button
                className="events-btn"
                onClick={() => navigate(`/event/${event.id}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== NON TECH EVENTS ===== */}
      <div className="events-category">
        <h3 className="events-category-title">Non-Tech Events</h3>

        <div className="events-grid">
          {nonTechEvents.map((event) => (
            <div key={event.id} className="events-card">
              <h4 className="events-card-title">{event.title}</h4>
              <div className="events-card-line"></div>
              <p className="events-card-desc">{event.desc}</p>
              <button
                className="events-btn"
                onClick={() => navigate(`/event/${event.id}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
