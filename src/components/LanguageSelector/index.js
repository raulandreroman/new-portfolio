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
    <span className='flex relative' onClick={() => handleLanguageChange()}>
      <CgGlobeAlt
        
        className={`my-1 lg:mx-1 text-${theme}-secondary `}
      />
      {userLanguage === 'es' ? (
        <p
          className={
            theme === 'light'
              ? `text-xs bg-light-primary absolute p-1 right-0 text-light-bg self-end rounded-sm`
              : `text-xs bg-white absolute p-1 right-0 text-dark-bg self-end rounded-sm`
          }
        >
          ES
        </p>
      ) : (
        <p
           className={
            theme === 'light'
              ? `text-xs bg-light-primary absolute p-1 right-0 text-light-bg self-end rounded-sm `
              : `text-xs bg-white absolute p-1 right-0 text-dark-bg self-end rounded-sm `
          }
        >
          EN
        </p>
      )}
    </span>
  );
}
