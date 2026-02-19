import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMoneyBillWave,FaArrowLeft, FaShareAlt, FaCalendarAlt, FaClock, FaUsers, FaCheckCircle } from "react-icons/fa";
import eventsData from "../data/eventsData";
import "../style/eventdetails.css";

// --- Sub-Components for Cleanliness ---

const Badge = ({ category }) => (
  <div className="event-badges">
    <span className="event-badge tech">{category}</span>
  </div>
);

const SectionCard = ({ title, children, icon }) => (
  <article className="event-card fade-in">
    <h3 className="card-title">
      {icon && <span className="card-icon">{icon}</span>}
      {title}
    </h3>
    <div className="card-content">{children}</div>
  </article>
);

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX feel (remove if data is instant)
    const timer = setTimeout(() => {
      const foundEvent = eventsData.find((e) => e.id === parseInt(id));
      setEvent(foundEvent);
      setLoading(false);
      
      // Update Page Title for SEO
      if (foundEvent) {
        document.title = `${foundEvent.title} | Event Details`;
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Check out this event: ${event.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading Event Details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="error-container">
        <h2>Event Not Found</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="event-page">
      <div className="container">
        {/* Navigation Bar within Page */}
        <div className="page-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <button className="share-btn" onClick={handleShare} aria-label="Share Event">
            <FaShareAlt /> Share
          </button>
        </div>

        <div className="event-wrapper">
          {/* LEFT SIDE - Main Content */}
          <div className="event-left">
            
            {/* Hero Image Placeholder (If available in data) */}
            {event.image && (
              <div className="event-hero-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <div className="image-overlay"></div>
              </div>
            )}

            <div className="content-spacer">
              <Badge category={event.category} />
              <h1 className="event-title">{event.title}</h1>
              
              <SectionCard title="About Event">
                <p className="event-description">{event.description}</p>
              </SectionCard>

              <SectionCard title="Event Format" icon="">
                {event.format.map((round, index) => (
                  <div key={index} className="event-round">
                    <h4>Round {index + 1}: {round.title}</h4>
                    <ul className="round-details">
                      {round.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </SectionCard>

              <SectionCard title="Rules & Regulations" icon="">
                <ul className="rules-list">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          </div>

          {/* RIGHT SIDE - Sticky Sidebar */}
          <aside className="event-right">
            <div className="event-details-box glass-panel">
              <h3>Event Info</h3>
              
              <dl className="details-list">
                <div className="event-detail-item">
                  <dt><FaUsers /> Team Type</dt>
                  <dd>{event.teamType}</dd>
                </div>

                <div className="event-detail-item">
                  <dt><FaClock /> Duration</dt>
                  <dd>{event.duration}</dd>
                </div>

                <div className="event-detail-item">
                  <dt><FaCalendarAlt /> Rounds</dt>
                  <dd>{event.roundsCount}</dd>
                </div>

                {event.category === "Technical" && (
                <div className="event-detail-item">
                    <dt><FaMoneyBillWave /> Rewards</dt>
                    <dd>Cash Prize</dd>
                </div>
                )}

              </dl>
              <button className="event-register-btn" onClick={()=> navigate('/register')}>
                Register Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;