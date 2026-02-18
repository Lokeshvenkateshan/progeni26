import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";   // 👈 import logo

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEffect = () => {
      setSticky(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScrollEffect);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <nav className={`nav-bar ${sticky ? "sticky-header" : ""}`}>
      <div className="nav-main">
        <a href="/">
          <img src={logo} alt="Progeni Logo" className="nav-logo" />
        </a>
      </div>

      <div className="mobile-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      <ul className="nav-items">
        <li>
          <a href="#" className="nav-link">
            <span onClick={() => handleScroll("home")}>HOME</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <span onClick={() => handleScroll("about")}>About Us</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <span onClick={() => handleScroll("events")}>Events</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <span onClick={() => handleScroll("contact")}>Contact</span>
          </a>
        </li>
      </ul>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#" className="mobile-link">
          <span onClick={() => handleScroll("home")}>HOME</span>
        </a>
        <a href="#" className="mobile-link">
          <span onClick={() => handleScroll("about")}>About Us</span>
        </a>
        <a href="#" className="mobile-link">
          <span onClick={() => handleScroll("events")}>Events</span>
        </a>
        <a href="#" className="mobile-link">
          <span onClick={() => handleScroll("contact")}>Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
