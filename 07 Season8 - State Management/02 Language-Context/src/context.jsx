import React, { useContext, useState } from "react";
import { createContext } from "react";

const translations = [
  {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language",
    },
  },
  {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان",
    },
  },
];

const LanguageContext = createContext(undefined);

function LanguageProvider({ children }) {
  const [languageTheme, setLanguageTheme] = useState(translations[0]);

  const languageThemeToggler = (targetLanguage) => {
    setLanguageTheme(
      translations.filter((item) => item.language === targetLanguage)[0]
    );
  };

  return (
    <LanguageContext.Provider value={{ languageTheme, languageThemeToggler }}>
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguageContext = () => {
  const value = useContext(LanguageContext);

  if (value === undefined) {
    throw new Error(
      "useLanguageContext must be within LanguageContext Provider"
    );
  }

  return value;
};

export { LanguageProvider, useLanguageContext };
