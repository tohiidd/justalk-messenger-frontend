import { PaletteMode, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    lightGreen: string;
    grey: string;
  }
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          common: {
            white: "#fff",
            lightGreen: "#4eac6d33",
            grey: "#f2f2f2",
          },
          primary: { main: "#adb5bd" },
          secondary: { main: "#8f9198" },
          success: { main: "#4eac6d" },
        }
      : {
          common: {
            white: "#262626",
            lightGreen: "#4eac6d33",
            grey: "#2e2e2e",
          },
          primary: { main: "#5a636c" },
          secondary: { main: "#797c8c" },
          success: { main: "#4eac6d" },
        }),
  },
});
