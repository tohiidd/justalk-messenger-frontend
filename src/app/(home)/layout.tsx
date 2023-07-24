"use client";

import {useState, SyntheticEvent, useContext, ReactNode} from "react";
import {useMediaQuery, Box} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Chat, DarkModeOutlined, LightMode} from "@mui/icons-material";
import TabPanel from "components/Ui/TabPanel";
import {AsideMenu, AsideTab, AsideTabs, DarkTooltip} from "components/Ui/AsideMenu";
import {menuTabs} from "data";
import ColorModeContext from "context/ColorModeContext";
import Avatar from "components/Avatar/Avatar";

interface Props {
  children: ReactNode;
}
export default function HomeLayout({children}: Props) {
  const [selectedTab, setSelectedTab] = useState(1);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {defaultMatches: true});
  const {toggleColorMode} = useContext(ColorModeContext);

  const handleChange = (event: SyntheticEvent, newTab: number) => {
    setSelectedTab(newTab);
  };
  return (
    <section>
      <Box sx={{display: "flex", flexDirection: {xs: "column-reverse", md: "row"}}}>
        <AsideMenu sx={{overflow: "hidden"}}>
          {isMd && (
            <Box className="app-bar-logo">
              <Chat sx={{color: "success.main", verticalAlign: "middle"}} />
            </Box>
          )}
          <AsideTabs
            orientation={isMd ? "vertical" : "horizontal"}
            value={selectedTab}
            onChange={handleChange}
            aria-label="AsideMenu tabs "
          >
            {menuTabs.map(({id, title, icon}) => (
              <AsideTab
                key={id}
                icon={<DarkTooltip title={title}>{icon}</DarkTooltip>}
                sx={{display: !isMd && id === 0 ? "none" : "inline-flex"}}
              />
            ))}
          </AsideTabs>
          <Box
            sx={{flexGrow: {xs: "1", md: "unset"}, textAlign: "center", marginTop: {xs: "unset", md: "auto"}}}
            onClick={toggleColorMode}
          >
            <DarkTooltip title="Dark Mode">
              {theme.palette.mode === "light" ? (
                <DarkModeOutlined sx={{fontSize: {xs: "1.5rem", md: "1.8rem"}}} />
              ) : (
                <LightMode sx={{fontSize: {xs: "1.5rem", md: "1.8rem"}}} />
              )}
            </DarkTooltip>
          </Box>
          <Avatar setSelectedTab={setSelectedTab} />
        </AsideMenu>
        <section>
          {menuTabs.map(({id, panel}) => (
            <TabPanel key={id} value={selectedTab} index={id}>
              {panel}
            </TabPanel>
          ))}
        </section>
        {children}
      </Box>
    </section>
  );
}
