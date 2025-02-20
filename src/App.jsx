import React, { useState, useEffect } from 'react';
import './index.css';
import TimerDisplay from './components/timer/TimerDisplay';
import TimerControls from './components/timer/TimerControls';
import Card from './components/common/Card'; // Import the Card component

const App = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8"> {/* Outer Card */}
        <TimerDisplay time={time} />
        <TimerControls
          isRunning={isRunning}
          time={time}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
        />
      </Card>
    </div>
  );
};

export default App;