// src/components/settings/SettingsPanel.jsx
import { useContext } from 'react';
import { SettingsContext } from './SettingsContext';

const SettingsPanel = () => {
    const { settings, updateSettings } = useContext(SettingsContext);

    const handleChange = (e) => {
        updateSettings({ [e.target.name]: e.target.value });
    };

    return (
        <div>
            <label>
                Timer Duration:
                <input
                    type="number"
                    name="duration"
                    value={settings.duration}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default SettingsPanel;
