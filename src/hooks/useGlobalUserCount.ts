import { useState, useEffect } from 'react';

const USER_COUNT_KEY = 'privatestack_user_count';
const DEFAULT_USER_COUNT = 100;

export function useGlobalUserCount() {
  const [userCount, setUserCount] = useState(() => {
    const stored = localStorage.getItem(USER_COUNT_KEY);
    return stored ? parseInt(stored, 10) : DEFAULT_USER_COUNT;
  });

  useEffect(() => {
    localStorage.setItem(USER_COUNT_KEY, userCount.toString());
  }, [userCount]);

  return [userCount, setUserCount] as const;
}