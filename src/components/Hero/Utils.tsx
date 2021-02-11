import React, { useContext, useEffect } from 'react';
//Import icons
import { CgMoon, CgSun } from 'react-icons/cg';
//Import theme context
import { ThemeContext } from '../../containers/ThemeContext';
//Import component
import LanguageSelector from './LanguageSelector';

export default function Utils() {
  const { theme, userThemeChange } = useContext(ThemeContext);

  function handleClick() {
    userThemeChange();
  }
  //Sets theme according to user preference
  useEffect(() => {
    let defaultTheme = window.localStorage.getItem('pref-theme');
    if (!defaultTheme) {
      defaultTheme = 'light';
    }
    userThemeChange(defaultTheme);
  }, [userThemeChange]);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-end items-end text-4xl md:text-5xl lg:text-5xl">
      <button className="flex" onClick={handleClick}>
        {theme === 'dark' ? (
          <CgSun
            aria-label="Change to light theme"
            className={`my-1 lg:mx-1 text-${theme}-secondary`}
          />
        ) : (
          <CgMoon
            aria-label="Change to dark theme"
            className={`my-1 lg:mx-1 text-${theme}-secondary`}
          />
        )}
      </button>

      <LanguageSelector />
    </div>
  );
}
