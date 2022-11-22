import { ReactNode } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ContainerProps {
  children: ReactNode;
  sx: any;
}

function Container({ children, ...props }: ContainerProps) {
  const theme = useTheme();
  return (
    <Box className={`container ${theme.palette.mode === "light" ? "light" : "dark"}`} {...props}>
      {children}
    </Box>
  );
}

export default Container;
