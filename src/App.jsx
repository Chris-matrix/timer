// Import necessary hooks and components
import { useState, useEffect } from 'react';
import './index.css';
import TimerDisplay from './components/timer/TimerDisplay';
import TimerControls from './components/timer/TimerControls';
import Card from './components/common/Card'; // Import the Card component

// Define the main App component
const App = () => {
  // State to keep track of the timer (in seconds) and whether it is running
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the timer countdown
  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      // Set an interval to decrease the time by 1 second every second
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Stop the timer when it reaches 0
      setIsRunning(false);
    }
    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Handlers to start, stop, and reset the timer
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(1500);
  };

  // Render the main UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8"> {/* Outer Card */}
        <TimerDisplay time={time} /> {/* Display the current time */}
        <TimerControls
          isRunning={isRunning}
          time={time}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
        /> {/* Controls to start, stop, and reset the timer */}
      </Card>
    </div>
  );
};

// Export the App component as the default export
export default App;