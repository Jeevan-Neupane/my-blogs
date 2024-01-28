"use client";

import GlobalStyle from "@/styles/GlobalStyle";
import { darkThemeColors } from "@/styles/Theme";
import { ThemeProvider } from "styled-components";

export function Providers({ children }) {
  return (
    <ThemeProvider theme={darkThemeColors}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
