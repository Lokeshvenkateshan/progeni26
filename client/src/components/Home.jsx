import React, { useEffect } from 'react'
import Countdown from './CountDown'
import "../style/home.css"
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const sr = ScrollReveal({
            origin: "left",
            distance: "20px",
            duration: 1500,
            delay: 200,
            reset: false   // change to true if you want repeat animation
        });

        sr.reveal(".home-container h1");
        sr.reveal(".home-container h4", { origin: "right",delay: 300 });
        sr.reveal(".home-container h2", { origin: "right",delay: 300 });
        sr.reveal(".home-container h3", { delay: 400 });
        sr.reveal(".home-container h4", { delay: 500 });
        sr.reveal(".home-container .ath", { delay: 600 });
        sr.reveal(".home-container .home-buttons", { delay: 700 });
    }, []);

    return (
        <section className="home-section">
            <div className="home-container">
                <h4>Government College of Engineering</h4>
                <h1>National Level Technical Symposium</h1>
                <h2>Progeni'26.0</h2>
                <h3>Department Of Computer Science And Engineering</h3>
                <h4>
                    A computer would deserve to be called intelligent 
                    if it could deceive a human into believing that it was human
                </h4>
                <span className='ath'>- Alan Turing</span>

                <Countdown targetDate="March 13, 2026 00:00:00" />

                <div className="home-buttons">
                    <a href="#events">
                        <button>Discover Events</button>
                    </a>

                    <a href="#about">
                        <button>Who We Are</button>
                    </a>

                    <button 
                        className="primary"
                        onClick={() => navigate('/register')}
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home
