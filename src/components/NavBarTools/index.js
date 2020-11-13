import React, { useContext, useEffect } from 'react';
import { CgMoon, CgSun } from 'react-icons/cg';
import { ThemeContext } from '../../containers/ThemeContext';
import LanguageSelector from '../LanguageSelector'

export default function NavBarTools() {
  const { theme, userThemeChange } = useContext(ThemeContext);

  function handleClick(){
    userThemeChange()
  }

  useEffect(() => {
    let defaultTheme = window.localStorage.getItem('pref-theme');
    if (!defaultTheme) {
      defaultTheme = 'light'
    }
    userThemeChange(defaultTheme);
  }, [userThemeChange]);


  return (
    <div className="flex flex-col lg:flex-row lg:justify-end items-end text-4xl lg:text-5xl">
      <button className='flex' onClick={handleClick}>
        {theme === 'dark' ? (
          <CgSun className={`my-1 lg:mx-1 text-${theme}-secondary`} />
        ) : (
          <CgMoon className={`my-1 lg:mx-1 text-${theme}-secondary`} />
        )}
      </button>
      <button >
        <LanguageSelector />
      </button>
    </div>
  );
}
