import { useState, useCallback } from 'react';

const useNotification = (title, options = {}) => {
  const [permission, setPermission] = useState(Notification.permission);

  const notify = useCallback(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
      return;
    }

    if (permission === "granted") {
      new Notification(title, options);
    } else if (permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  }, [title, options, permission]);

  return notify;
};

export default useNotification;
