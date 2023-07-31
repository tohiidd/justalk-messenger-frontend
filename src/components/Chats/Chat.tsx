import Image from "next/image";
import {Box, Typography} from "@mui/material";
import {chatMessageStyles, lineClamp1Styles} from "./styles";
import {FriendAvatar, FriendName} from "components/Ui/Friend";
import {getUserAvatarText} from "utils/getUserAvatar";
import {IChat} from "./types";
import {useRouter, usePathname} from "next/navigation";

interface ChatProps {
  chat: IChat;
}

function Chat({chat}: ChatProps) {
  const {id, name, image, username, newMessages, lastMessage, lastMessageDate, avatarColor} = chat;

  const {push} = useRouter();
  const pathname = usePathname();

  let avatarText: string | undefined;
  if (!image) {
    avatarText = getUserAvatarText(name || username);
  }

  function handleClick() {
    const url = `${pathname}?id=${id}`;
    push(url);
  }
  return (
    <Box sx={chatMessageStyles} onClick={handleClick}>
      {image && (
        <Box sx={{display: "flex", alignItems: "center", img: {borderRadius: "50%"}}}>
          <Image src={image} alt="user pic" width={40} height={40} />
        </Box>
      )}
      {!image && <FriendAvatar sx={{bgcolor: avatarColor}}>{avatarText}</FriendAvatar>}
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
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "end", marginLeft: "auto"}}>
        <Typography variant="subtitle1" component="span" color="secondary" sx={{fontSize: ".7rem"}} className="text">
          {lastMessageDate}
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          component="span"
          sx={{
            visibility: newMessages >= 1 ? "visible" : "hidden",
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
