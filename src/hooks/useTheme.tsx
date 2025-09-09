

import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  return { theme, setTheme };
};
