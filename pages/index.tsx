import { useState, SyntheticEvent } from "react";
import { useMediaQuery, Box, Tooltip, TooltipProps, tooltipClasses, AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import {
  AccountCircleOutlined,
  ForumOutlined,
  RecentActorsOutlined,
  GroupOutlined,
  PhoneOutlined,
  SettingsOutlined,
  Chat,
  DarkModeOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { ReactElement } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
// const AntTabss = styled(Tabs)({
//   "& .MuiTabs-indicator": {
//     backgroundColor: "#4eac6d",
//     height: "30%",
//     maxWidth: 20,
//   },
//   "& .MuiTabs-indicatorSpan": {},
// });
interface StyledTabsProps {
  orientation: "vertical" | "horizontal";
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const AntTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} variant="fullWidth" TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ theme }) => ({
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
interface StyledTabProps {
  icon: ReactElement;
}
const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  color: "#878a92",
  minWidth: "unset",
  [theme.breakpoints.up("md")]: {
    minWidth: "64px",
    "& .MuiSvgIcon-root": {
      fontSize: "1.5rem",
    },
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.3rem",
  },
  "&.Mui-selected": {
    color: "#4eac6d",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} placement="right" disableInteractive />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
export default function Home() {
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section>
      <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "center",
            height: { xs: "60px", md: "100vh" },
            backgroundColor: "#2e2e2e",
            color: "#878a92",
            bottom: 0,
            position: { xs: "fixed", md: "initial" },
            width: { xs: "100%", md: "unset" },
            top: "unset",
            gap: "8px",
            padding: { xs: "0 10px", md: "0" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "initial" },
              width: { md: "100%" },
              lineHeight: "5rem",
              textAlign: "center",
            }}
          >
            <Chat sx={{ color: "#4eac6d", verticalAlign: "middle" }} />
          </Box>
          <AntTabs
            orientation={isMd ? "vertical" : "horizontal"}
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              flexGrow: { xs: "3", md: "unset" },
              borderRight: 1,
              borderColor: "divider",
              gap: "8px",
              "& .MuiTabs-flexContainer": { gap: "8px" },
            }}
          >
            {isMd && (
              <AntTab
                icon={
                  <DarkTooltip title="Profile">
                    <AccountCircleOutlined />
                  </DarkTooltip>
                }
              />
            )}
            <AntTab
              icon={
                <DarkTooltip title="Chats">
                  <ForumOutlined />
                </DarkTooltip>
              }
            />
            <AntTab
              icon={
                <DarkTooltip title="Groups">
                  <GroupOutlined />
                </DarkTooltip>
              }
            />
            <AntTab
              icon={
                <DarkTooltip title="Contacts">
                  <RecentActorsOutlined />
                </DarkTooltip>
              }
            />
            <AntTab
              icon={
                <DarkTooltip title="Calls">
                  <PhoneOutlined />
                </DarkTooltip>
              }
            />
            <AntTab
              icon={
                <DarkTooltip title="Settings">
                  <SettingsOutlined />
                </DarkTooltip>
              }
            />
          </AntTabs>
          <Box sx={{ flexGrow: { xs: "1", md: "unset" }, textAlign: "center", marginTop: { xs: "unset", md: "auto" } }}>
            <DarkTooltip title="Dark Mode">
              <DarkModeOutlined sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }} />
            </DarkTooltip>
          </Box>
          <Box
            sx={{
              flexGrow: { xs: "1", md: "unset" },
              height: { xs: "unset", md: "70px" },
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "& .avatar-img": {
                margin: { xs: "auto" },
                borderRadius: "50%",
                border: { xs: "2px solid white", sm: "none" },
                outline: { sm: "3px solid white" },
              },
            }}
          >
            <Image
              src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
              alt="avatar"
              width={30}
              height={30}
              className="avatar-img"
            />
          </Box>
        </AppBar>
        <section>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </section>
        <section></section>
      </Box>
    </section>
  );
}
