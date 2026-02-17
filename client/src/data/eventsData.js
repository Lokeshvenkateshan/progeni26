const eventsData = [
  {
    id: 2,
    title: "NormX Event",
    category: "Technical",
    description:
      "NormX is a database-focused competitive event designed to test participants’ SQL knowledge and schema design skills. The event challenges logical thinking, query-writing ability, and database structuring expertise through two engaging rounds.",

    teamType: "Individual",
    duration: "30–40 Minutes",
    roundsCount: 2,

    format: [
      {
        title: "Round 1 – SQL Aptitude Test",
        details: [
          "Duration: 15 Minutes",
          "Platform: Quiz-based (Quizizz)",
          "Focus: SQL concepts, queries, logic & problem-solving"
        ]
      },
      {
        title: "Round 2 – Database Schema Design",
        details: [
          "Duration: 30–40 Minutes",
          "Focus: Designing efficient & normalized schemas",
          "Apply database design principles"
        ]
      }
    ],

    rules: [
      "Individual Participation Only",
      "Participants must bring their own laptop",
      "Any form of malpractice leads to disqualification",
      "Round 1 requires active Quizizz account",
      "Online SQL platforms NOT permitted in Round 2",
      "Work must be done using offline/local tools"
    ]
  },

  {
    id: 2,
    title: "Code Wars",
    category: "Technical",
    description:
      "A 24-hour competitive programming marathon focused on algorithms, optimization, and real-time problem solving.",

    teamType: "Individual",
    duration: "24 Hours",
    roundsCount: 3,

    format: [
      {
        title: "Round 1 – Online Screening",
        details: ["MCQ + Coding test"]
      },
      {
        title: "Round 2 – Algorithmic Challenge",
        details: ["Advanced problem solving"]
      },
      {
        title: "Final Round – Live Coding",
        details: ["Real-time coding challenge"]
      }
    ],

    rules: [
      "Bring your own laptop",
      "Internet restricted",
      "Plagiarism results in disqualification"
    ]
  }
];

export default eventsData;
