import { useState, useRef, SyntheticEvent } from "react";
import Image from "next/image";
import {
  EmailOutlined,
  HelpOutline,
  InfoOutlined,
  LocationOnOutlined,
  MoreVert,
  PersonOutline,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem, Typography } from "@mui/material";
import { TabPanelTitle } from "components/Ui/TabPanel";
import { AvatarWrapper } from "components/Ui/AsideMenu";
import { headerStyles } from "./styles";
import Dropdown from "../Ui/Dropdown";

export default function Profile() {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpenMenu(false);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "160px",
          img: { objectFit: "cover" },
        }}
      >
        <Image
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667480959/jusTalk/mmvx1frutemx1oefesta.jpg"
          alt="profile background"
          fill
        />
        <Box sx={headerStyles}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TabPanelTitle sx={{ color: "white", zIndex: "1" }}>Profile</TabPanelTitle>
            <IconButton ref={anchorRef} onClick={handleToggle}>
              <MoreVert sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
        <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current}>
          <MenuItem>
            <ListItemText>Info</ListItemText>
            <ListItemIcon>
              <InfoOutlined />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemText>Settings</ListItemText>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemText>Help</ListItemText>
            <ListItemIcon>
              <HelpOutline />
            </ListItemIcon>
          </MenuItem>
        </Dropdown>
      </Box>
      <Box sx={{ borderBottom: "1px solid", borderBottomColor: "common.grey100", pb: "20px" }}>
        <AvatarWrapper
          sx={{ height: "unset !important", marginTop: "-48px", zIndex: "2", position: "relative", cursor: "default" }}
        >
          <Image
            src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
            alt="avatar"
            width={80}
            height={80}
          />
        </AvatarWrapper>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
            }}
            variant="subtitle1"
            color="primary"
          >
            Kathryn Swarey
          </Typography>
          <Typography
            variant="subtitle1"
            color="common.grey200"
            sx={{
              fontSize: ".9rem",
            }}
          >
            Busy
          </Typography>
        </Box>
      </Box>
      <Box p={2.5}>
        <Box mb={3}>
          <Typography
            variant="subtitle1"
            color="common.grey200"
            sx={{
              fontSize: ".85rem",
            }}
          >
            If several languages coalesce, the grammar of the resulting language is more simple
          </Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid", borderBottomColor: "common.grey100", pb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <PersonOutline sx={{ color: "secondary.main", fontSize: "1.2rem" }} />
            <Typography
              variant="subtitle1"
              color="common.black"
              sx={{
                fontSize: ".9rem",
              }}
            >
              Kathryn Swarey
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: 1 }}>
            <EmailOutlined sx={{ color: "secondary.main", fontSize: "1.2rem" }} />
            <Typography
              variant="subtitle1"
              color="common.black"
              sx={{
                fontSize: ".9rem",
              }}
            >
              admin@themesbrand.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: 1 }}>
            <LocationOnOutlined sx={{ color: "secondary.main", fontSize: "1.2rem" }} />
            <Typography
              variant="subtitle1"
              color="common.black"
              sx={{
                fontSize: ".9rem",
              }}
            >
              California, USA
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
