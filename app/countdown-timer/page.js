"use client";

import { useState, useEffect, useRef } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalId.current = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : 0));
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalId.current);
    setIsRunning(false);
  };

  const resumeTimer = () => {
    startTimer();
  };

  const resetTimer = () => {
    clearInterval(intervalId.current);
    setTimeLeft(1500);
    setIsRunning(false);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      pauseTimer();
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-900">
      <h1 className="text-6xl font-bold text-white">
        {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </h1>
      <div className="flex space-x-4 mt-8">
        <button
          onClick={isRunning ? pauseTimer : startTimer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resumeTimer}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md"
        >
          Resume
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
