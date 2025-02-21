
const TimerControls = ({ isRunning, time, onStart, onStop, onReset }) => {
// start button  to the foucus timer//

    <div className="flex flex-col items-center mt-4">
      <button onClick={onStart} disabled={isRunning || time === 0} className="btn btn-primary mb-2">
        Start Focus Session
      </button>
      {/* stop button to stop the timer */}
      <button onClick={onStop} disabled={!isRunning || time === 0} className="btn btn-secondary mb-2">
        Stop
      </button>
      {/* reset button to reset the timer */}
      <button onClick={onReset} className="btn btn-secondary">
        Reset
      </button>
      {/* display the current session time */}
      <p className="mt-4">Current Session: 25 minutes</p>
    </div>
};

export default TimerControls;