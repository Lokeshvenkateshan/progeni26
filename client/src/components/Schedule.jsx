import "../style/schedule.css";
import ScheduleCard from "./ScheduleCard";
import { FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Schedule() {
  useEffect(() => {
    ScrollReveal().reveal(".t-wrap", {
      distance: "60px",
      duration: 900,
      easing: "ease-out",
      origin: "top",
      reset: true
    });
    ScrollReveal().reveal(".sh-event-card", {
      distance: "60px",
      duration: 900,
      easing: "ease-out",
      origin: "bottom",
      interval: 200,
      reset: true
    });
    ScrollReveal().reveal(".sh-section-title", {
      origin: "left",
      distance: "20px",
      duration: 800,
      reset: true
    });
    ScrollReveal().reveal(".sh-banner", {
      origin: "right",
      distance: "20px",
      duration: 800,
      reset: true
    });
     ScrollReveal().reveal(".sh-break", {
      origin: "right",
      distance: "20px",
      duration: 800,
      reset: true
    });
    ScrollReveal().reveal(".sh-tech-note", {
      origin: "left",
      distance: "20px",
      duration: 800,
      reset: true
    });
  }, []);
  // ---------- TIME HELPER ----------
  const addMinutes = (time, mins) => {
    const [hourMin, period] = time.split(" ");
    let [hour, minute] = hourMin.split(":").map(Number);

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute + mins);

    let h = date.getHours();
    const m = date.getMinutes();

    const newPeriod = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    return `${h}:${m.toString().padStart(2, "0")} ${newPeriod}`;
  };

  // ---------- BASE TIMES ----------
  const batch1Start = "11:15 AM";
  const batch2Start = "12:15 PM";

  // ---------- EVENT DATA ----------
  const techEvents = [
    {
      title: "BYTE TO BILLION",
      duration: 60,
      location: "Seminar Hall & L2 classroom",
    },
    {
      title: "PROMPT FURY",
      duration: 40,
      location: "Alan Turing Lab \n [NM/ML Lab]",
    },
    {
      title: "LOGICRYPT",
      duration: 60,
      location: "Round-1: L4 classroom \n Round-2: Whitfield Diffie Lab [Java Lab]",
    },
    {
      title: "NORM-X",
      duration: 60,
      location: "Round-1: L3 classroom \n Round-2: Vinton Cerf Lab [DBMS Lab]",
    },
  ];

  const nonTechEvents = [
    {
      title: "NEON NUMERIX",
      start: "2:00 PM",
      duration: 40,
      location: "CSE Open Space",
    },
    {
      title: "PIXEL PARADOX",
      start: "2:00 PM",
      duration: 40,
      location: "L3 classroom",
    },
    {
      title: "GLITCH RUN",
      start: "2:45 PM",
      duration: 55,
      location: "CSE Open Space",
    },
    {
      title: "CYBER SPIN",
      start: "3:50 PM",
      duration: 40,
      location: "Main Auditorium",
    },

  ];

  return (
    <div className="schedule-container">

      {/* TITLE */}
      <div className="t-wrap">
        <h2 className="sh-title">Event Schedule</h2>
      </div>

      {/* INAUGURATION */}
      <div className="sh-banner">
        INAUGURATION · 9:30 – 10:55 AM
      </div>

      {/* TECH EVENTS */}
      <h2 className="sh-section-title">
        TECH EVENTS
      </h2>

      <div className="sh-grid">

        {techEvents.map((event, index) => (

          <ScheduleCard
            key={index}
            title={event.title}
            batch1={`${batch1Start} – ${addMinutes(batch1Start, event.duration)}`}
            batch2={`${batch2Start} – ${addMinutes(batch2Start, event.duration)}`}
            location={event.location}
          />

        ))}

      </div>

      {/* TECH NOTE */}
      <div className="sh-tech-note">
        <FaInfoCircle /> Tech events are organized in batches. Participants can attend two tech events by selecting one event from each batch.
      </div>

      {/* LUNCH BREAK */}
      <div className="sh-break">
        LUNCH BREAK · 1:15 – 2:00 PM
      </div>

      {/* NON TECH EVENTS */}
      <h2 className="sh-section-title pink">
        NON-TECH EVENTS
      </h2>

      <div className="sh-grid">

        {nonTechEvents.map((event, index) => (

          <ScheduleCard
            key={index}
            title={event.title}
            time={`${event.start} – ${addMinutes(event.start, event.duration)}`}
            location={event.location}
          />

        ))}

      </div>

      {/* VALEDICTORY */}
      <div className="sh-banner bottom">
        VALEDICTORY CEREMONY · 4:30 – 5:00 PM
      </div>

      {/* WARNING NOTE */}
      <div className="sh-tech-note warning">
        <FaExclamationTriangle /> Schedule timings are subject to change due to unforeseen circumstances.
      </div>

    </div>
  );
}