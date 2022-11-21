import { AccountCircleOutlined, LockOutlined, LogoutOutlined, SettingsOutlined } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { AvatarWrapper } from "components/Ui/AsideMenu";
import Dropdown from "components/Ui/Dropdown";
import useDisplayMenu from "hooks/useDisplayMenu";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface AvatarProps {
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

function Avatar({ setSelectedTab }: AvatarProps) {
  const { openMenu, anchorRef, handleToggle, handleClose } = useDisplayMenu();

  return (
    <>
      <AvatarWrapper onClick={handleToggle} ref={anchorRef}>
        <Image
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
          alt="avatar"
          width={30}
          height={30}
        />
      </AvatarWrapper>
      <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current!}>
        <MenuItem onClick={() => setSelectedTab(0)}>
          <ListItemText>Profile</ListItemText>
          <ListItemIcon>
            <AccountCircleOutlined />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={() => setSelectedTab(5)}>
          <ListItemText>Settings</ListItemText>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemText>Change Password</ListItemText>
          <ListItemIcon>
            <LockOutlined />
          </ListItemIcon>
        </MenuItem>
        <MenuItem sx={{ marginTop: "6px" }}>
          <ListItemText>Log out</ListItemText>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
        </MenuItem>
      </Dropdown>
    </>
  );
}

export default Avatar;
