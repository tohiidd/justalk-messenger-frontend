import { useState, SyntheticEvent, useContext } from "react";
import Image from "next/image";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chat, DarkModeOutlined, LightMode } from "@mui/icons-material";
import TabPanel from "components/Ui/TabPanel";
import { AsideMenu, AsideTab, AsideTabs, AvatarWrapper, DarkTooltip } from "components/Ui/AsideMenu";
import { asideItems } from "data";
import ColorModeContext from "context/ColorModeContext";
import ChatList from "components/ChatList/ChatList";
import Profile from "components/Profile/Profile";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleChange = (event: SyntheticEvent, newTab: number) => {
    setSelectedTab(newTab);
  };

  return (
    <section>
      <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
        <AsideMenu>
          {isMd && (
            <Box className="app-bar-logo">
              <Chat sx={{ color: "#4eac6d", verticalAlign: "middle" }} />
            </Box>
          )}
          <AsideTabs
            orientation={isMd ? "vertical" : "horizontal"}
            value={selectedTab}
            onChange={handleChange}
            aria-label="AsideMenu tabs "
          >
            {asideItems
              .filter(({ title }) => (isMd ? title : title !== "Profile"))
              .map(({ id, title, icon }) => (
                <AsideTab key={id} icon={<DarkTooltip title={title}>{icon}</DarkTooltip>} />
              ))}
          </AsideTabs>
          <Box
            sx={{ flexGrow: { xs: "1", md: "unset" }, textAlign: "center", marginTop: { xs: "unset", md: "auto" } }}
            onClick={toggleColorMode}
          >
            <DarkTooltip title="Dark Mode">
              {theme.palette.mode === "light" ? (
                <DarkModeOutlined sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }} />
              ) : (
                <LightMode sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }} />
              )}
            </DarkTooltip>
          </Box>
          <AvatarWrapper>
            <Image
              src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
              alt="avatar"
              width={30}
              height={30}
            />
          </AvatarWrapper>
        </AsideMenu>
        <section>
          <TabPanel value={selectedTab} index={0}>
            <Profile />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <ChatList />
          </TabPanel>
          <TabPanel value={selectedTab} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={selectedTab} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={selectedTab} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={selectedTab} index={5}>
            Item Six
          </TabPanel>
        </section>
        <section></section>
      </Box>
    </section>
  );
}
