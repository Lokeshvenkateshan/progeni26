import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/Events.css";

const techEvents = [
  {
    id: 1,
    title: "Coding",
    desc: "24-hour competitive programming marathon. Solve complex algorithms under pressure.",
  },
  {
    id: 2,
    title: "NormX Event",
    desc: "Build AI-powered solutions for real-world problems with expert mentorship.",
  },
  {
    id: 3,
    title: "Startup pitch",
    desc: "Capture the Flag ethical hacking challenge with real-world scenarios.",
  },
  {
    id: 4,
    title: "Vibe Coding",
    desc: "Design and deploy a high-impact landing page in just 4 hours.",
  },
];

const nonTechEvents = [
  {
    id: 6,
    title: "Treasure Hunt",
    desc: "Solve riddles and uncover hidden secrets across the campus.",
  },
  {
    id: 7,
    title: "Act And Decode ",
    desc: "Live music showdown featuring electrifying performances.",
  },
  {
    id: 8,
    title: " Lucky Star ",
    desc: "Engage in powerful discussions on trending global topics.",
  },
  {
    id: 9,
    title: "Lucky Corner",
    desc: "Capture stunning moments and compete for the best frame.",
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
