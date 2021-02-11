import React, { useState, createContext, useContext } from 'react';
import { dictionaryList } from '../languages';

type Locale = string;

interface IProvider {
  userLanguage: Locale;
  dictionary: {};
  userLanguageChange: (selected?: Locale) => void;
}

//Create the LanguageContext with default language
export const LanguageContext = createContext<Partial<IProvider>>({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState<Locale>('en');

  const provider: IProvider = {
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
};

type TextProps = {
  tid?: string;
  section: string;
};

const Text = ({ tid, section }: TextProps) => {
  const languageContext = useContext(LanguageContext);
  const sectionContent = languageContext.dictionary[section];

  //Checks if needs to return an array to map it over or just a string
  if (!Array.isArray(sectionContent)) {
    return !tid ? sectionContent : sectionContent[tid] || tid;
  } else {
    return sectionContent;
  }
};

export { Text, LanguageProvider };
