import React from 'react';
import Card from '../common/Card';

const TimerDisplay = ({ time }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Card>
      <h1 className="text-4xl font-bold">{formatTime(time)}</h1>
    </Card>
  );
};

export default TimerDisplay;