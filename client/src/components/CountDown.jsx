import React, { useEffect, useState } from 'react'
import "../style/countdown.css"
const Countdown = ({ targetDate }) => {

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime()

        if (difference <= 0) return null

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!timeLeft) return <h3>Event Started 🎉</h3>

    return (
        <div className="countdown">
            <div className="ring days">
                <div className="inner">
                    <span>{timeLeft.days}</span>
                    <p>Days</p>
                </div>
            </div>

            <div className="ring hours">
                <div className="inner">
                    <span>{timeLeft.hours}</span>
                    <p>Hours</p>
                </div>
            </div>

            <div className="ring minutes">
                <div className="inner">
                    <span>{timeLeft.minutes}</span>
                    <p>Minutes</p>
                </div>
            </div>

            <div className="ring seconds">
                <div className="inner">
                    <span>{timeLeft.seconds}</span>
                    <p>Seconds</p>
                </div>
            </div>
        </div>

    )
}

export default Countdown
