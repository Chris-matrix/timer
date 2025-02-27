import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

import PropTypes from 'prop-types';

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    longBreakInterval: 4,
    autoStartBreaks: false,
    autoStartPomodoros: false,
  });

  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
