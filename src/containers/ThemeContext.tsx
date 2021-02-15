import React, { useState, createContext } from 'react';

type Theme = string;

interface IThemeContext {
  theme: Theme;
  userThemeChange: (e?: string) => void;
}

export const ThemeContext = createContext<Partial<IThemeContext>>({
  theme: 'light',
});

export function ThemeProvider({ children }: { children: JSX.Element }) {
  const [theme, setTheme] = useState<Theme>('light');

  const provider = {
    theme,
    userThemeChange: (e?: Theme) => {
      const newTheme = e ? e : theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      window.localStorage.setItem('pref-theme', newTheme);
    },
  };
  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
}
