import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context for settings
const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [settings, setSettings] = useState({
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    longBreakInterval: 4,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

// Custom hook to use the settings context
export function useSettings() {
  return useContext(SettingsContext);
}

// Define the SettingsPanel component to display and modify timer settings
function SettingsPanel() {
  const { settings, setSettings } = useSettings();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Timer Settings</h2>
      <label className="block mb-2">
        Work Duration (minutes):
        <input
          type="number"
          value={settings.workDuration}
          onChange={(e) => setSettings({ ...settings, workDuration: e.target.value })}
          className="mt-1 block w-full"
        />
      </label>
      <label className="block mb-2">
        Break Duration (minutes):
        <input
          type="number"
          value={settings.breakDuration}
          onChange={(e) => setSettings({ ...settings, breakDuration: e.target.value })}
          className="mt-1 block w-full"
        />
      </label>
      <label className="block mb-2">
        Long Break Duration (minutes):
        <input
          type="number"
          value={settings.longBreakDuration}
          onChange={(e) => setSettings({ ...settings, longBreakDuration: e.target.value })}
          className="mt-1 block w-full"
        />
      </label>
      <label className="block mb-2">
        Long Break Interval:
        <input
          type="number"
          value={settings.longBreakInterval}
          onChange={(e) => setSettings({ ...settings, longBreakInterval: e.target.value })}
          className="mt-1 block w-full"
        />
      </label>
    </div>
  );
}

// Export the SettingsPanel component as the default export
export default SettingsPanel;
