import React, { useState, createContext, useContext } from 'react';
import { dictionaryList } from '../languages';

type Locale = string;

type TextProps = {
  tid?: string;
  section: string;
};

type SectionContent = {
  header?: string;
  content?: Content;
  btn?: string;
  btn1?: string;
  btn2?: string;
  projects?: Projects;
  techStackHeader?: string;
  [selector: string]: any;
};

type Content =
  | string
  | {
      paragraph: { subtitle?: string; text: string };
    };

type Projects = {
  name: string;
  summary: string;
};

interface DictionaryContent {
  CTASection: {
    header: string;
    content: string;
  };
  aboutSection: {
    header: string;
    content: Content[];
  };
  projectsSection: {
    header: string;
    btn1: string;
    btn2: string;
    projects: Projects[];
    techStackHeader: string;
  };
  contactSection: {
    content: string;
    btn: string;
  };
  footerSection: { content: string };
  notFound: { content: string };
  [selector: string]: any;
}

type DictionaryList = {
  [locale: string]: DictionaryContent;
};

interface IProvider {
  userLanguage: Locale;
  dictionary: DictionaryContent;
  userLanguageChange: (selected?: Locale) => void;
}

const typedDictionaryList: DictionaryList = dictionaryList;

type LanguageProviderProps = {
  children: JSX.Element;
};

//Create the LanguageContext with default language
export const LanguageContext = createContext<Partial<IProvider>>({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [userLanguage, setUserLanguage] = useState<Locale>('en');

  const provider: IProvider = {
    userLanguage,
    dictionary: typedDictionaryList[userLanguage],
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

const Text = ({ tid, section }: TextProps) => {
  const languageContext = useContext(LanguageContext);

  const sectionContent: SectionContent = languageContext.dictionary![section];

  //Checks if needs to return an array to map it over or just a string
  if (!Array.isArray(sectionContent)) {
    return !tid ? sectionContent : sectionContent[tid] || tid;
  } else {
    return sectionContent;
  }
};

export { Text, LanguageProvider };
