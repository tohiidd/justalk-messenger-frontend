import { PaletteMode, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    lightGreen: string;
    grey: string;
    grey100: string;
    softDark: string;
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
            grey100: "#f6f6f9",
            black: "#495057",
            softDark: "rgba(52,58,64,.18)",
          },
          primary: { main: "#5a636c" },
          secondary: { main: "#8f9198" },
          success: { main: "#4eac6d" },
        }
      : {
          common: {
            white: "#262626",
            lightGreen: "#4eac6d33",
            grey: "#2e2e2e",
            grey100: "#2e2e2e",
            black: "#adb5bd",
            softDark: "rgba(143,145,152,.18)",
          },
          primary: { main: "#adb5bd" },
          secondary: { main: "#797c8c" },
          success: { main: "#4eac6d" },
        }),
  },
});
