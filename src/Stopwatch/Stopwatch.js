import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <h2>Time: {formatTime(time)}</h2>
      {isRunning ? (
        <button onClick={stopStopwatch}>Stop</button>
      ) : (
        <button onClick={startStopwatch}>Start</button>
      )}
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;
