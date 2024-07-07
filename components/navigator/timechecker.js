"use client";
import react from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#717875" : "#e1faef", // Default color, potentially for light mode
    },
  },
});

const TimebasedTheme = ({ children }) => {
  const hour = new Date().getHours();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Decide on theme based on hour or system preference

  const mode = hour < 7 || hour > 18 || prefersDarkMode ? "dark" : "light";
  const theme = createTheme(getDesignTokens(mode));
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
export default TimebasedTheme;
