import { useEffect, useState } from "react";
import React from "react";


export default function Clock() {
    const [seconds, setSeconds] = useState(120);

    let interval = React.useRef()
    const handleStart = () => {
        interval.current = setInterval(() => {
            updateTime()
        }, 1000);
        return () => clearInterval(interval)
        };

    function updateTime() {
        setSeconds(preSecond => preSecond === 0? preSecond : preSecond - 1)
    }
    function stopTime(){
        clearInterval(interval.current)}
    
    function resetTime() {
        setSeconds(120)
        clearInterval(interval.current)}
    
    return (
        <div className="clock-container">
            <div className="clock-background">
                <p className="time">{seconds}</p>
                <button className="play-button"onClick={handleStart}><img className="play-button-img" src="/images/play.png" alt="play"></img></button>
                <button className="stop-button"onClick={stopTime}><img className="stop-button-img" src="/images/pause.png" alt="play"></img></button>
                <button className="reset-button-time"onClick={resetTime}><img className="reset-button-img" src="/images/reset.png" alt="play"></img></button>
            </div>
        </div>
    )
}