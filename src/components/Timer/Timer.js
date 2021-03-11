import React, { useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [timerObj, setTimerObj] = useState({});

  const startTimer = () => {
    console.log("Starting timer.");
  };

  const stopTimer = () => {
    console.log("Stopping timer.");
  };

  const resetTimer = () => {
    console.log("Resetting timer.");
  };

  return <div className="timer-conatiner"></div>;
};

export default Timer;
