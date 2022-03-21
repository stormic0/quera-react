import React from "react";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Styles from "./data/Styles";
import ThemeProvider, { useTheme } from "./providers/ThemeProvider";

const StyleTag = () => {
  const { theme } = useTheme();

  return <style>{Styles(theme)}</style>;
};

function App() {
  return (
    <ThemeProvider>
      <StyleTag />
      <NameBox />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
