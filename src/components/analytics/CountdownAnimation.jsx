import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CountdownAnimation.jsx';

const CountdownAnimation = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="countdown-animation">
      <div className="countdown-circle">
        <svg>
          <circle cx="50" cy="50" r="45"></circle>
          <circle
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDasharray: 283,
              strokeDashoffset: 283 - (283 * timeLeft) / seconds,
            }}
          ></circle>
        </svg>
        <div className="countdown-text">{formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

CountdownAnimation.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default CountdownAnimation;

