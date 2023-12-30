import React, { createContext, useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "../theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useColorTheme from "./Contexts/Theme/useColorTheme";
/* Pages */
import Home from "./Pages/Home";

function App() {
  // const ColorThemeContext = createContext({});
  const { colorTheme, setColorTheme } = useColorTheme();
  const [crrTheme, setCrrTheme] = useState(
    createTheme(getDesignTokens(colorTheme))
  );

  useEffect(() => {
    let newTheme = createTheme(getDesignTokens(colorTheme));
    setCrrTheme(newTheme);
  }, [colorTheme]);

  return (
    <ThemeProvider theme={crrTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route key="Home" path="/" element={<Home />} />
          <Route
            key="NotFound"
            path="*"
            element={<div>Bruh PAGE NOT FOUND</div>}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
