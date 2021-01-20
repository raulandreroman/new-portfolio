import React, { useContext, useEffect } from "react";
//Import contexts
import { LanguageContext } from "../../containers/Language";
import { ThemeContext } from "../../containers/ThemeContext";

export default function LanguageSelector() {
  const { userLanguageChange, userLanguage } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  //Set selected language by calling context method
  const handleLanguageChange = () => {
    userLanguageChange();
  };

  //Sets language according to user preference
  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("pref-lang");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <>
      <button>
        <span className="flex relative" onClick={() => handleLanguageChange()}>
          {" "}
          {userLanguage !== "es" ? (
            <p
              aria-label="Cambiar idioma a español"
              className={
                theme === "light"
                  ? `text-2xl mb-3 md:text-4xl lg:text-4xl lg:mb-0 lg:min-w-4 font-semibold lg:p-1  text-dark-bg  `
                  : `text-2xl  mb-3 md:text-4xl lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold  lg:p-1 text-light-bg `
              }
            >
              ES
            </p>
          ) : (
            <p
              aria-label="Change language to english"
              className={
                theme === "light"
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
