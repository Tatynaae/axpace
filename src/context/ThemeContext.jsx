import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
