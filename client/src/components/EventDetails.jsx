import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../style/eventdetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) {
    return <h2 style={{ textAlign: "center" }}>Event Not Found</h2>;
  }

  return (
    <section className="event-page">
      <div className="event-wrapper">

        {/* LEFT SIDE */}
        <div className="event-left">

          <div className="event-badges">
            <span className="event-badge tech">{event.category}</span>
          </div>

          <h1 className="event-title">{event.title}</h1>

          <div className="event-card">
            <p>{event.description}</p>
          </div>

          {/* FORMAT */}
          <div className="event-card">
            <h3>Event Format</h3>

            {event.format.map((round, index) => (
              <div key={index} className="event-round">
                <h4>{round.title}</h4>
                {round.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* RULES */}
          <div className="event-card">
            <h3>Rules & Regulations</h3>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="event-right">
          <div className="event-details-box">
            <h3>Details</h3>

            <div className="event-detail-item">
              <span>Team Type</span>
              <strong>{event.teamType}</strong>
            </div>

            <div className="event-detail-item">
              <span>Duration</span>
              <strong>{event.duration}</strong>
            </div>

            <div className="event-detail-item">
              <span>Number of Rounds</span>
              <strong>{event.roundsCount}</strong>
            </div>

            <button className="event-register-btn">
              Register Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;
