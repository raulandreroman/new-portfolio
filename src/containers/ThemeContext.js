import React, { useState, createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const provider = {
    theme,
    userThemeChange: (e) => {
      const newTheme = e ? e : theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      window.localStorage.setItem('pref-theme', newTheme);
    },
  };
  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
}
