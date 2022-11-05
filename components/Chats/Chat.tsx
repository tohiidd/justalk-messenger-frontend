import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { chatMessageStyles, lineClamp1Styles } from "./styles";
import { FriendName } from "components/Ui/Friend";

function Chat() {
  return (
    <Box sx={chatMessageStyles}>
      <Box sx={{ display: "flex", alignItems: "center", img: { borderRadius: "50%" } }}>
        <Image
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667375697/jusTalk/zewq69s3crcubsawfsa9.jpg"
          alt="user pic"
          width={40}
          height={40}
        />
      </Box>
      <Box>
        <FriendName className="friend-name">Katrina Winters</FriendName>
        <Typography
          variant="subtitle1"
          color="secondary"
          sx={{
            fontSize: ".7rem",
            ...lineClamp1Styles,
          }}
          className="chat-text"
        >
          You are the best tohid!
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", marginLeft: "auto" }}>
        <Typography variant="subtitle1" component="span" color="secondary" sx={{ fontSize: ".7rem" }} className="text">
          22:10
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
          3
        </Typography>
      </Box>
    </Box>
  );
}

export default Chat;
