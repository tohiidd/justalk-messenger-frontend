import { SyntheticEvent, RefObject } from "react";
import { HelpOutline, InfoOutlined, SettingsOutlined } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import Dropdown from "components/Ui/Dropdown";

interface ProfileDropdownProps {
  openMenu: boolean;
  handleClose: (event: Event | SyntheticEvent) => void;
  anchorRef: RefObject<HTMLButtonElement>;
}
function ProfileDropdown({ openMenu, handleClose, anchorRef }: ProfileDropdownProps) {
  return (
    <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current!}>
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
  );
}

export default ProfileDropdown;
