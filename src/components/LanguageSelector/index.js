import React, { useContext, useEffect } from 'react';

import { LanguageContext } from '../../containers/Language';
import { ThemeContext } from '../../containers/ThemeContext';

import { CgGlobeAlt } from 'react-icons/cg';

export default function LanguageSelector() {
  const { userLanguageChange } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  //Set selected language by calling context method
  const handleLanguageChange = () => {
    userLanguageChange();
  };

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <CgGlobeAlt
      onClick={() => handleLanguageChange()}
      className={`my-1 lg:mx-1 text-${theme}-secondary`}
    />
  );
}
