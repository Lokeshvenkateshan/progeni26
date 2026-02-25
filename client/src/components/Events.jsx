import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "../style/events.css";
import { FaMoneyBillWave, FaGift } from "react-icons/fa";

const techEvents = [
  { id: 1, title: "LogiCrypt", desc: "Logical thinking and problem-solving" },
  { id: 2, title: "NormX", desc: "Design scalable and structured databases." },
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
    id: 5,
    title: "Glitch Run",
    desc: "Treasure hunt of clues and challenges.",
  },
  {
    id: 6,
    title: "Pixel Paradox",
    desc: "Decode, observe, and express creatively.",
  },
  {
    id: 7,
    title: "Neon Numerix",
    desc: "Music, math, and rapid-fire thinking.",
  },
  {
    id: 8,
    title: "Cyber Spin",
    desc: "Luck, suspense, and elimination gameplay.",
  },
];

const Events = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "20px",
      duration: 1600,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      scale: 0.95,
      reset: true,
    });

    // Header reveal
    sr.reveal(".events-main-title", { origin: "top" });
    sr.reveal(".events-subtitle", { delay: 200 });

    // Category titles
    sr.reveal(".events-category-title", {
      origin: "left",
      delay: 300,
    });

    // Cards stagger animation (anime style)
    sr.reveal(".events-card", {
      interval: 200, // this creates stagger effect
      origin: "bottom",
    });
    sr.reveal(".ent", {
      interval: 200, // this creates stagger effect
      origin: "bottom",
    });
    sr.reveal(".events-prize-text", {
      interval: 200, // this creates stagger effect
      origin: "bottom",
    });
  }, []);

  return (
    <section className="events-section" id="events">
      <div className="events-header">
        <h2 className="events-main-title">Our Events</h2>
        <p className="events-subtitle">
          Explore the arenas of innovation and creativity.
        </p>
      </div>

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
      <div className="ent">
        <div className="events-note-container">
          <p className="events-note-title">Note:</p>

          <ul className="events-note-list">
            <li>Entry Fee - Rs.250 only</li>
            <li>Max 2 Tech + 2 Non-Tech events.</li>
            <li>Lunch & refreshments included.</li>
            <li>Online entry → verify at registration desk.</li>
            <li>College ID mandatory.</li>
            <li>Valid payment details required.</li>
          </ul>
        </div>
      </div>
      {/* Prize Highlight Text */}
      {/* Prize Highlight Section */}
      <div className="events-prize-text">
        <div className="events-prize-item">
          <FaMoneyBillWave className="events-prize-icon cash-icon" />
          <span>Cash Prizes Available for Winners</span>
        </div>

        <div className="events-prize-item">
          <FaGift className="events-prize-icon goodies-icon" />
          <span>Welcome kit for All Participants</span>
        </div>
      </div>

      <button
        className="events-register-btn"
        onClick={() => navigate("/register")}
      >
        Register Now
      </button>
    </section>
  );
};

export default Events;
