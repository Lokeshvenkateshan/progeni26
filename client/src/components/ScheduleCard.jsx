import React from "react";
import "../style/card.css";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ScheduleCard = ({
  title,
  time,
  batch1,
  batch2,
  location,
}) => {

  return (
    <div className="sh-event-card">

      {/* Hexagon layered design */}
      <div className="sh-hex-stack">
        <div className="sh-hex h1"></div>
        <div className="sh-hex h2"></div>
        <div className="sh-hex h3"></div>
      </div>

      {/* Card Content */}
      <div className="sh-event-content">

        <h3>{title}</h3>

        <div className="sh-divider"></div>

        <div className="sh-info">

          {/* If tech event batches exist */}
          {batch1 && (
            <span>
              <FaClock /> Batch 1 — {batch1}
            </span>
          )}

          {batch2 && (
            <span>
              <FaClock /> Batch 2 — {batch2}
            </span>
          )}

          {/* For non-tech events */}
          {!batch1 && !batch2 && time && (
            <span>
              <FaClock /> {time}
            </span>
          )}

          <span className="sh-loc">
            <FaMapMarkerAlt /> {location}
          </span>

        </div>

      </div>

    </div>
  );
};

export default ScheduleCard;