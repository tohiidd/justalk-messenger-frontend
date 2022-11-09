import Image from "next/image";
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { chatMessageStyles } from "components/Chats/styles";
import { FriendAvatar, FriendName } from "components/Ui/Friend";
import { BlockOutlined, DeleteOutline, MoreVert } from "@mui/icons-material";
import useDisplayMenu from "hooks/useDisplayMenu";
import Dropdown from "components/Ui/Dropdown";
import { getFriendAvatarText } from "utils/getFriendAvatar";
import { IFriend } from "./types";

interface FriendProps {
  friend: IFriend;
}
function Friend({ friend }: FriendProps) {
  const { openMenu, anchorRef, handleToggle, handleClose } = useDisplayMenu();

  const { name, username, image, avatarColor } = friend;

  let avatarText: string | undefined;

  if (!image) {
    avatarText = getFriendAvatarText(name || username);
  }
  return (
    <>
      <Box sx={chatMessageStyles}>
        {image && <Image src={image} alt="friend" width={40} height={40} />}
        {!image && <FriendAvatar sx={{ bgcolor: avatarColor }}>{avatarText}</FriendAvatar>}{" "}
        <FriendName className="friend-name">{name || username}</FriendName>
        <IconButton ref={anchorRef} onClick={handleToggle}>
          <MoreVert sx={{ color: "success.main", fontSize: "1.1rem" }} />
        </IconButton>
      </Box>
      <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current}>
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
