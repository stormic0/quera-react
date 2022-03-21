import React from "react";
import { THEME_TYPE } from "../constants";
import { useTheme } from "../providers/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={theme === THEME_TYPE.DARK}
          onChange={themeToggler}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
