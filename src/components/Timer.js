// src/components/Timer.js
import { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeUp, key, isRunning }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // Reset the timer when key changes
  }, [key, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    if (isRunning) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, onTimeUp, isRunning]);

  return (
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div
        className="bg-yellow-400 h-4 rounded-full"
        style={{ width: `${(timeLeft / duration) * 100}%` }}
      />
    </div>
  );
};

export default Timer;
