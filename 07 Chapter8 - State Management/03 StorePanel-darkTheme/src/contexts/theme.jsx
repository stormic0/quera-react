import React, { createContext, useContext, useState } from "react";

const THEME = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const ThemeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const themeToggler = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const value = useContext(ThemeContext);

  if (value === undefined) {
    throw new Error("useTheme must be within ThemeContext Provider");
  }

  return value;
};

export { ThemeProvider, useTheme, THEME };
