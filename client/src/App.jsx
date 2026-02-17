import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Events />
    </>
  );
}
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
