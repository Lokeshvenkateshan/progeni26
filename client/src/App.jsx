import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Register from "./components/Register";

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Events />
      <Contact/>
      <Footer/>
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
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
