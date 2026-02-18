import React, { useEffect } from "react";
import "../style/about.css";
import {
  FaLightbulb,
  FaBrain,
  FaUsers
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const About = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "20px",
      duration: 1100,
      easing: "ease",
      opacity: 0,
      reset: true
    });

    // Titles
    sr.reveal(".about-main-title", { origin: "top" });
    sr.reveal(".about-sub-title", { delay: 200 });

    // Paragraph
    sr.reveal(".about-content", { origin: "bottom", delay: 300 });

    // Cards (simple stagger)
    sr.reveal(".about-card", {
      interval: 200,
      origin: "bottom",
      delay: 400
    });

  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <h1 className="about-main-title">
          About &nbsp;
        </h1>

        <h2 className="about-sub-title">
          Progeni'26.0
        </h2>

        <p className="about-content">
          Progeni’26.0 is a National Level Technical Symposium organized by the
          Department of Computer Science and Engineering. It serves as a dynamic
          platform for innovators, developers, designers, and technology enthusiasts
          from across the nation to come together and showcase their skills.

          <br /><br />

          Inspired by the words of Alan Turing, we believe intelligence is not just
          artificial — it is visionary, adaptive, and transformative.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <FaLightbulb className="about-icon" />
            <h3>Innovation</h3>
            <p>Pushing technological boundaries through creativity.</p>
          </div>

          <div className="about-card">
            <FaBrain className="about-icon" />
            <h3>Knowledge</h3>
            <p>A platform to compete, collaborate, and grow.</p>
          </div>

          <div className="about-card">
            <FaUsers className="about-icon" />
            <h3>Collaboration</h3>
            <p>Connecting brilliant minds across disciplines.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
