import React, { useState, useEffect } from "react";
import "./DateTimeDisplay.css"; // Plik CSS do stylizacji

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000); // Aktualizacja co sekundę
    return () => clearInterval(timer); // Czyszczenie interwału przy unmount
  }, []);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="date-time-container">
      <p className="date-time-header">Data & Czas</p>
      <p className="date-time-display">
        {formatDate(currentTime)} | {formatTime(currentTime)}
      </p>
    </div>
  );
};

export default DateTimeDisplay;
