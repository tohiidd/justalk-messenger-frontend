import { SyntheticEvent, RefObject } from "react";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import Dropdown from "components/Ui/Dropdown";
import { Circle } from "@mui/icons-material";

const statusItems = ["Active", "Away", "Do not disturb"];
const colors = ["#06d6a0", "#ffd166", "#ef476f"];

interface StatusDropdownProps {
  openMenu: boolean;
  handleClose: (event: Event | SyntheticEvent) => void;
  anchorRef: RefObject<HTMLButtonElement>;
}
function StatusDropdown({ openMenu, handleClose, anchorRef }: StatusDropdownProps) {
  return (
    <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current!}>
      {statusItems.map((status, index) => (
        <MenuItem key={status} sx={{ gap: "8px" }} onClick={handleClose}>
          <ListItemIcon sx={{ minWidth: "unset !important", justifyContent: "start" }}>
            <Circle sx={{ fontSize: ".6rem", color: `${colors[index]} !important` }} />
          </ListItemIcon>
          <ListItemText>{status}</ListItemText>
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default StatusDropdown;
