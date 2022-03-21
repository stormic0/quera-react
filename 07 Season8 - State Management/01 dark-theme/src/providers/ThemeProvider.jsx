import React, { createContext, useContext, useState } from "react";
import { THEME_TYPE } from "../constants";

const ThemeContenxt = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_TYPE.LIGHT);

  const themeToggler = () => {
    setTheme(theme === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT);
  };

  return (
    <ThemeContenxt.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContenxt.Provider>
  );
};

const useTheme = () => {
  const value = useContext(ThemeContenxt);

  if (value === undefined) {
    throw new Error("useTheme must be within ThemeContext Provider");
  }

  return value;
};

export { useTheme };
export default ThemeProvider;
