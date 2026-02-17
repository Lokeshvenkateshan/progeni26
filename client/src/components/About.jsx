import React from "react";
import "../style/about.css";

const About = () => {
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

          The symposium is designed to foster creativity, critical thinking, and 
          collaboration through a series of technical and non-technical events. 
          From coding competitions and hackathons to project expos and workshops, 
          Progeni empowers young minds to push the boundaries of innovation.

          <br /><br />

          Inspired by the words of Alan Turing, we believe intelligence is not just 
          artificial — it is visionary, adaptive, and transformative.
        </p>

      </div>
    </section>
  );
};

export default About;
