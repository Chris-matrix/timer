import { useState, useEffect } from 'react';

export function useAnalytics() {
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('pomodoro_stats');
    return saved ? JSON.parse(saved) : {
      completedSessions: 0,
      totalFocusTime: 0,
      breaks: 0,
      currentStreak: 0,
      longestStreak: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('pomodoro_stats', JSON.stringify(stats));
  }, [stats]);

  const recordSession = (duration) => {
    setStats(prev => ({
      ...prev,
      completedSessions: prev.completedSessions + 1,
      totalFocusTime: prev.totalFocusTime + duration,
      currentStreak: prev.currentStreak + 1,
      longestStreak: Math.max(prev.longestStreak, prev.currentStreak + 1),
    }));
  };

  const recordBreak = () => {
    setStats(prev => ({ ...prev, breaks: prev.breaks + 1 }));
  };

  return { stats, recordSession, recordBreak };
}
