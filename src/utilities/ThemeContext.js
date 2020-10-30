import React, {useState, createContext} from 'react';
export const ThemeContext = createContext();


export default function FullContext({ children }) {
  const [theme, setTheme] = useState('light');

  const defaultContext = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
};
