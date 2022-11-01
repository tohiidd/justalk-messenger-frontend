import { ReactNode, SyntheticEvent, ReactElement } from "react";
import { AppBar, Tab, Tabs, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface AsideTabsProps {
  orientation: "vertical" | "horizontal";
  children?: ReactNode;
  value: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

export const AsideTabs = styled((props: AsideTabsProps) => (
  <Tabs {...props} variant="fullWidth" TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ theme }) => ({
  flexGrow: "3",
  borderRight: 1,
  borderColor: "divider",
  gap: "8px",
  [theme.breakpoints.up("md")]: {
    flexGrow: "unset",
  },
  "& .MuiTabs-flexContainer": { gap: "8px" },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    [theme.breakpoints.down("md")]: {
      top: "0",
    },
  },
  "& .MuiTabs-indicatorSpan": {
    width: "40%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "50%",
    },
    backgroundColor: "#4eac6d",
    margin: "auto",
  },
}));

interface AsideTabProps {
  icon: ReactElement;
}

export const AsideTab = styled((props: AsideTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  color: "#878a92",
  minWidth: "unset",
  [theme.breakpoints.up("md")]: {
    minWidth: "64px",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },
  "&.Mui-selected": {
    color: "#4eac6d",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} placement="right" disableInteractive />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const Aside = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "60px",
  backgroundColor: "#2e2e2e",
  color: "#878a92",
  bottom: 0,
  position: "fixed",
  width: "100%",
  top: "unset",
  gap: "8px",
  padding: "0 10px",
  backgroundImage: "unset !important",
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    height: "100vh",
    position: "initial",
    width: "unset",
    padding: "0",
  },
  "& .app-bar-logo": {
    display: "none",
    lineHeight: "5rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "initial",
      width: "100%",
    },
  },
  "& .app-bar-avatar": {
    flexGrow: "1",
    height: { xs: "unset", md: "70px" },
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      flexGrow: "unset",
      height: "70px",
    },
    "& .avatar-img": {
      margin: "auto",
      borderRadius: "50%",
      border: "2px solid white",
      [theme.breakpoints.up("sm")]: {
        outline: "3px solid white",
        border: "none",
      },
    },
  },
}));
