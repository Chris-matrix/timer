import React, { useState, useEffect } from 'react';
// import { SettingsProvider } from './components/settings/SettingsContext';
import ProgressIndicator from './components/analytics/ProgressIndicator';
import CountdownAnimation from './components/analytics/CountdownAnimation';
import StreakCounter from './components/analytics/StreakCounter';
// import SessionStats from './components/analytics/SessionStats';
import SettingsPanel from './components/settings/SettingsPanel';
import TimerDisplay from './components/timer/TimerDisplay';
import TimerControls from './components/timer/TimerControls';
import Card from './components/common/Card';
import './index.css';

const App = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [backgroundGif, setBackgroundGif] = useState('');

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

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundGif})`;
  }, [backgroundGif]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(1500);
  };

  const handleToggleSettings = () => setShowSettings(!showSettings);
  const handleBackgroundGifChange = (e) => setBackgroundGif(e.target.value);

  return (
    //<SettingsProvider>
      <div className="App">
        <div className="header">
          <h1>Focus Timer</h1>
          <button onClick={handleToggleSettings}>
            {showSettings ? 'Hide Settings' : 'Show Settings'}
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter GIF URL"
          value={backgroundGif}
          onChange={handleBackgroundGifChange}
          className="gif-input"
        />
        {/* <ProgressIndicator progress={75} /> */}
        <CountdownAnimation seconds={1500} />
        <StreakCounter streak={3} />
        {/* <SessionStats stats={{ sessions: 10, duration: 300 }} /> */}
        {showSettings && <SettingsPanel />}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Card className="w-full max-w-md p-8">
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
      </div>
    //</SettingsProvider>
  );
};

export default App;