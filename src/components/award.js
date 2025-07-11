import React, { useState, useEffect } from 'react';
import './award.css'; // 👈 Custom CSS file

const Counter = ({ end, label, suffix = '', duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <div className="counter-box">
      <h2 className="counter-value">
        {count}
        {suffix}
      </h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const Award = () => {
  return (
    <div className="award-section">
      <h1 className="award-heading">My Achievements</h1>
      <div className="counter-container">
        <Counter end={12} label="Projects" suffix="+" />
        <Counter end={1} label="Awards" />
        <Counter end={3} label="Years of Experience" />
      </div>
    </div>
  );
};

export default Award;
