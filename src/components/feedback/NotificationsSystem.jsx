//import React from 'react';
import { useNotifications } from '../../hooks/useNotifications';
import Notification from './Notification';

function NotificationSystem() {
    const { notifications, removeNotification } = useNotifications();
  
    return (
      <div className="notification-container">
        {notifications.map(({ id, message, type }) => (
          <Notification
            key={id}
            id={id}
            message={message}
            type={type}
            onClose={removeNotification}
          />
        ))}
      </div>
    );
}

export default NotificationSystem;
  