import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <span className="logo-span">&lt;/</span>
          <span className="logo-text">Progeni</span>
          <span className="logo-span">&gt;</span>
        </a>
      </div>

      <div className="mobile-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      <ul className="nav-items">
        {/* <li><a href="#" className="nav-link">Home</a></li> */}
        <li><a href="#" className="nav-link"><span onClick={() => handleScroll("home")}>HOME</span></a></li>
        <li><a href="#about" className="nav-link"><span onClick={() => handleScroll("about")}>About Us</span></a></li>
        <li><a href="#events" className="nav-link"><span onClick={() => handleScroll("events")}>Events</span></a></li>
        <li><a href="#contact" className="nav-link"><span onClick={() => handleScroll("contact")}>Contact</span></a></li>
        
        
      </ul>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#" className="mobile-link" onClick={toggleMenu}><span onClick={() => handleScroll("home")}>HOME</span></a>
        <a href="#about" className="mobile-link" onClick={toggleMenu}><span onClick={() => handleScroll("about")}>About Us</span></a>
        <a href="#events" className="mobile-link" onClick={toggleMenu}><span onClick={() => handleScroll("events")}>Events</span></a>
        <a href="#contact" className="mobile-link" onClick={toggleMenu}><span onClick={() => handleScroll("contact")}>Contact</span></a>
      </div>
    </nav>
  );
};

export default Navbar;
