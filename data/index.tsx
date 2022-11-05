import {
  AccountCircleOutlined,
  ForumOutlined,
  RecentActorsOutlined,
  GroupOutlined,
  PhoneOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import Chats from "components/Chats/Chats";
import Friends from "components/Friends/Friends";
import Groups from "components/Groups/Groups";
import Profile from "components/Profile/Profile";

export const asideMenuTabs = [
  {
    id: "0",
    title: "Profile",
    icon: <AccountCircleOutlined />,
    panel: <Profile />,
  },
  {
    id: "1",
    title: "Chats",
    icon: <ForumOutlined />,
    panel: <Chats />,
  },
  {
    id: "2",
    title: "Groups",
    icon: <GroupOutlined />,
    panel: <Groups />,
  },
  {
    id: "3",
    title: "Friends",
    icon: <RecentActorsOutlined />,
    panel: <Friends />,
  },
  {
    id: "4",
    title: "Calls",
    icon: <PhoneOutlined />,
    panel: <></>,
  },

  {
    id: "5",
    title: "Settings",
    icon: <SettingsOutlined />,
    panel: <></>,
  },
];
