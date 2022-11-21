import { useState, useEffect, SyntheticEvent, useContext } from "react";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chat, DarkModeOutlined, LightMode } from "@mui/icons-material";
import TabPanel from "components/Ui/TabPanel";
import { AsideMenu, AsideTab, AsideTabs, DarkTooltip } from "components/Ui/AsideMenu";
import { menuTabs } from "data";
import ColorModeContext from "context/ColorModeContext";
import GetStartedConversation from "components/Conversation/GetStartedConversation";
import Conversation from "components/Conversation/Conversation";
import { useDispatch } from "react-redux";
import { setCredentials } from "redux/auth/authSlice";
import cookie from "cookie";
import jwt from "jwt-decode";
import { GetServerSidePropsContext } from "next";
import Avatar from "components/Avatar/Avatar";

export default function Home({ token, user }: any) {
  const [selectedTab, setSelectedTab] = useState(1);

  const dispatch = useDispatch();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleChange = (event: SyntheticEvent, newTab: number) => {
    setSelectedTab(newTab);
  };

  useEffect(() => {
    dispatch(setCredentials({ token, user }));
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
        <AsideMenu>
          {isMd && (
            <Box className="app-bar-logo">
              <Chat sx={{ color: "success.main", verticalAlign: "middle" }} />
            </Box>
          )}
          <AsideTabs
            orientation={isMd ? "vertical" : "horizontal"}
            value={selectedTab}
            onChange={handleChange}
            aria-label="AsideMenu tabs "
          >
            {menuTabs.map(({ id, title, icon }) => (
              <AsideTab
                key={id}
                icon={<DarkTooltip title={title}>{icon}</DarkTooltip>}
                sx={{ display: !isMd && id === 0 ? "none" : "inline-flex" }}
              />
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
          <Avatar setSelectedTab={setSelectedTab} />
        </AsideMenu>
        <section>
          {menuTabs.map(({ id, panel }) => (
            <TabPanel key={id} value={selectedTab} index={id}>
              {panel}
            </TabPanel>
          ))}
        </section>
        <Box
          component="section"
          sx={{
            display: { xs: "none", md: "block" },
            width: "100%",
            backgroundImage:
              "url(https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667645283/jusTalk/eoojdubgmbo3jcnmssqc.png)",
            backgroundColor: "common.grey",
          }}
        >
          <GetStartedConversation />
          {/* <Conversation /> */}
        </Box>
      </Box>
    </section>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const { reftoken } = cookie.parse(req.headers.cookie || "");

  const data = await fetch("http://localhost:5000/auth/refresh", {
    method: "GET",
    headers: {
      Cookie: `reftoken=${reftoken}`,
    },
  }).then((res) => res.json());

  if (!data.success) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { id } = jwt(reftoken) as { id: string };

  const userData = await fetch(`http://localhost:5000/users?id=${id}`).then((res) => res.json());

  return {
    props: { token: data.data.accessToken, user: userData.data },
  };
}
