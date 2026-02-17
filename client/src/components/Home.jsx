import React from 'react'
import Countdown from './CountDown'
import "../style/home.css"
const Home = () => {
    return (
        <section className="home-section">
            <div className="home-container">
                <h1>National Level Technical Symposium</h1>
                <h2>Progeni'26.0</h2>
                <h3>Department Of Computer Science And Engineering</h3>
                <h4>A computer would deserve to be called intelligent if it could deceive a human into believing that it was human</h4>
                <span className='ath'>-Alan Turing</span>
                <Countdown targetDate="March 13, 2026 00:00:00" />
                <div className="home-buttons">
                    <button>Discover Events</button>
                    <button>Who We Are</button>
                    <button className="primary">Register Now</button>
                </div>
            </div>
        </section>

    )
}

export default Home