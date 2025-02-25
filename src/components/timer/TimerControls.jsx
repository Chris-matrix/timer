//import React from 'react';
import PropTypes from 'prop-types';

// Define the TimerControls component with props for controlling the timer
const TimerControls = ({ isRunning, time, onStart, onStop, onReset }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {/* Button to start the timer, disabled if already running or time is 0 */}
      <button onClick={onStart} disabled={isRunning || time === 0} className="btn btn-primary mb-2">
        Start Focus Session
      </button>
      {/* Button to stop the timer, disabled if not running or time is 0 */}
      <button onClick={onStop} disabled={!isRunning || time === 0} className="btn btn-secondary mb-2">
        Stop
      </button>
      {/* Button to reset the timer */}
      <button onClick={onReset} className="btn btn-secondary">
        Reset
      </button>
      {/* Display the current session duration */}
      <p className="mt-4">Current Session: 25 minutes</p>
    </div>
  );
};

// Define prop types for the TimerControls component
TimerControls.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

// Export the TimerControls component as the default export
export default TimerControls;