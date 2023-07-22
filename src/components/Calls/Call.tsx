import { NorthEast, Phone, SouthWest, VideocamOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { lineClamp1Styles } from "components/Chats/styles";
import { FriendAvatar } from "components/Ui/Friend";
import Image from "next/image";
import { getUserAvatarText } from "utils/getUserAvatar";
import { callWrapperStyles } from "./styles";
import { ICall } from "./types";

interface CallProps {
  call: ICall;
  handleToggle: (type: string, id: string) => () => void;
}
function Call({ call, handleToggle }: CallProps) {
  const { id, name, username, avatarColor, image, date, callType, videoCall, duration } = call;
  let avatarText: string | undefined;
  if (!image) {
    avatarText = getUserAvatarText(name || username);
  }
  return (
    <Box sx={callWrapperStyles}>
      {image && (
        <Box sx={{ display: "flex", alignItems: "center", img: { borderRadius: "50%" } }}>
          <Image src={image} alt="user pic" width={30} height={30} />
        </Box>
      )}
      {!image && (
        <FriendAvatar sx={{ bgcolor: avatarColor, width: "30px", height: "30px", fontSize: ".8rem" }}>
          {avatarText}
        </FriendAvatar>
      )}
      <Box>
        <Typography sx={{ ...lineClamp1Styles, color: "common.black", fontSize: ".95rem" }}>
          {name || username}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {callType === "missed" && <NorthEast sx={{ color: "error.main", fontSize: ".6rem" }} />}
          {callType === "outgoing" && <SouthWest sx={{ color: "success.main", fontSize: ".6rem" }} />}
          <Typography sx={{ ...lineClamp1Styles, color: "common.grey200", fontSize: ".7rem", wordBreak: "break-all" }}>
            {date}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "6px", ml: { xs: "auto", md: "6px" } }}>
        <Typography component="span" sx={{ color: "common.grey200", fontSize: ".7rem", fontWeight: 500 }}>
          {duration}
        </Typography>
        <IconButton onClick={handleToggle(videoCall ? "video" : "voice", id)}>
          {videoCall ? (
            <VideocamOutlined color="success" fontSize="small" />
          ) : (
            <Phone color="success" fontSize="small" />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Call;
