import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { chatMessageStyles, lineClamp1Styles } from "./styles";
import { FriendAvatar, FriendName } from "components/Ui/Friend";
import { getFriendAvatarText } from "utils/getFriendAvatar";
import { IChat } from "./types";

interface ChatProps {
  chat: IChat;
}

function Chat({ chat }: ChatProps) {
  const { name, image, username, newMessages, lastMessage, lastMessageDate, avatarColor } = chat;

  let avatarText: string | undefined;
  if (!image) {
    avatarText = getFriendAvatarText(name || username);
  }
  return (
    <Box sx={chatMessageStyles}>
      {image && (
        <Box sx={{ display: "flex", alignItems: "center", img: { borderRadius: "50%" } }}>
          <Image src={image} alt="user pic" width={40} height={40} />
        </Box>
      )}
      {!image && <FriendAvatar sx={{ bgcolor: avatarColor }}>{avatarText}</FriendAvatar>}
      <Box>
        <FriendName className="friend-name">{name || username}</FriendName>
        <Typography
          variant="subtitle1"
          color="secondary"
          sx={{
            fontSize: ".7rem",
            ...lineClamp1Styles,
          }}
          className="chat-text"
        >
          {lastMessage}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", marginLeft: "auto" }}>
        <Typography variant="subtitle1" component="span" color="secondary" sx={{ fontSize: ".7rem" }} className="text">
          {lastMessageDate}
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          component="span"
          sx={{
            fontSize: ".7rem",
            backgroundColor: "common.softDark",
            width: "18px",
            textAlign: "center",
            borderRadius: "3px",
          }}
          className="chat-text"
        >
          {newMessages}
        </Typography>
      </Box>
    </Box>
  );
}

export default Chat;
