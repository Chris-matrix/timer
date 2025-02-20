import React from 'react';

const TimerControls = ({ isRunning, time, onStart, onStop, onReset }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <button onClick={onStart} disabled={isRunning || time === 0} className="btn btn-primary mb-2">
        Start Focus Session
      </button>
      <button onClick={onStop} disabled={!isRunning || time === 0} className="btn btn-secondary mb-2">
        Stop
      </button>
      <button onClick={onReset} className="btn btn-secondary">
        Reset
      </button>
      <p className="mt-4">Current Session: 25 minutes</p>
    </div>
  );
};

export default TimerControls;