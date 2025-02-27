import { useState, useCallback, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const SettingsContext = createContext();
const ToastContext = createContext();

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
      ...newSettings,
    }));
  };

  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((type, text) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, type, text }]);
    setTimeout(() => removeToast(id), 5000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, toasts, removeToast }}>
      <SettingsContext.Provider value={{ settings, updateSettings }}>
        {children}
      </SettingsContext.Provider>
    </ToastContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSettings() {
  return useContext(SettingsContext);
}

export function useToast() {
  return useContext(ToastContext);
}

const ToastManager = ({ renderToast }) => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="toast-container">
      {toasts.map(toast => renderToast({
        ...toast,
        onClose: () => removeToast(toast.id)
      }))}
    </div>
  );
};

ToastManager.propTypes = {
  renderToast: PropTypes.func.isRequired,
};

// Export the ToastManager component as the default export
export default ToastManager;
