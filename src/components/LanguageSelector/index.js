import React, { useContext, useEffect } from 'react';

import { LanguageContext } from '../../containers/Language';
import { ThemeContext } from '../../containers/ThemeContext';

import { CgGlobeAlt } from 'react-icons/cg';

export default function LanguageSelector() {
  const { userLanguageChange, userLanguage } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  //Set selected language by calling context method
  const handleLanguageChange = () => {
    userLanguageChange();
  };

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('pref-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <>
      <button>
        <span className="flex relative" onClick={() => handleLanguageChange()}>
          {' '}
          {userLanguage === 'es' ? (
            <p
              className={
                theme === 'light'
                  ? `text-2xl mb-3 lg:text-4xl lg:mb-0 lg:min-w-4 font-semibold lg:p-1  text-dark-bg  `
                  : `text-2xl  mb-3 lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold  lg:p-1 text-light-bg `
              }
            >
              ES
            </p>
          ) : (
            <p
              className={
                theme === 'light'
                  ? `text-2xl mb-3 lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold lg:p-1  text-dark-bg  `
                  : `text-2xl mb-3 lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold  lg:p-1 text-light-bg `
              }
            >
              EN
            </p>
          )}
        </span>
      </button>
    </>
  );
}
