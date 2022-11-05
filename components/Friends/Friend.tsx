import Image from "next/image";
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { chatMessageStyles } from "components/Chats/styles";
import { FriendName } from "components/Ui/Friend";
import { BlockOutlined, DeleteOutline, EditOffOutlined, MoreVert } from "@mui/icons-material";
import useDisplayMenu from "hooks/useDisplayMenu";
import Dropdown from "components/Ui/Dropdown";

function Friend() {
  const { openMenu, anchorRef, handleToggle, handleClose } = useDisplayMenu();

  return (
    <>
      <Box sx={chatMessageStyles}>
        <Image
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667582834/jusTalk/dozj6zuzslllnkazqirh.jpg"
          alt="friend"
          width={40}
          height={40}
        />
        {/* <FriendAvatar >G</FriendAvatar> */}
        <FriendName className="friend-name">Earnestine Sears</FriendName>
        <IconButton ref={anchorRef} onClick={handleToggle}>
          <MoreVert sx={{ color: "success.main", fontSize: "1.1rem" }} />
        </IconButton>
      </Box>
      <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current}>
        <MenuItem>
          <ListItemText>Edit</ListItemText>
          <ListItemIcon>
            <EditOffOutlined />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemText>Block</ListItemText>
          <ListItemIcon>
            <BlockOutlined />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemText>Remove</ListItemText>
          <ListItemIcon>
            <DeleteOutline />
          </ListItemIcon>
        </MenuItem>
      </Dropdown>
    </>
  );
}

export default Friend;
