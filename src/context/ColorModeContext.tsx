import {createContext, PropsWithChildren, useMemo, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {getDesignTokens} from "theme";

const ColorModeContext = createContext({toggleColorMode: () => {}});

export function ColorModeContextProvider({children}: PropsWithChildren) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default ColorModeContext;
