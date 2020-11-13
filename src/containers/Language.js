import React, { useState, createContext, useContext } from 'react';
import { dictionaryList } from '../languages';

//Create the LanguageContext with default language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = selected
        ? selected
        : userLanguage === 'en'
        ? 'es'
        : 'en';
      setUserLanguage(newLanguage);
      window.localStorage.setItem('pref-lang', newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function Text({ tid, section }) {
  const languageContext = useContext(LanguageContext);
  const sectionContent = languageContext.dictionary[section]

  //Checks if needs to return an array to map it over or just a string
  if(!Array.isArray(sectionContent)){
    return !tid ? sectionContent : sectionContent[tid] || tid

  } else {
    return sectionContent
  }
}
