import Image from "next/image";
import { Box, Typography } from "@mui/material";

const lineClamp1 = { WebkitLineClamp: "1", display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" };

function ChatMessage() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        p: "6px 24px",
        cursor: "pointer",
        transition: "all 200ms",
        "&:hover": { backgroundColor: "common.grey100" },
        "&.active": {
          backgroundColor: "success.main",
          "& .chat-text": {
            color: "#fff",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", img: { borderRadius: "50%" } }}>
        <Image
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667375697/jusTalk/zewq69s3crcubsawfsa9.jpg"
          alt="user pic"
          width={40}
          height={40}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: ".9rem",
            fontWeight: "500",
            ...lineClamp1,
          }}
          variant="subtitle1"
          color="primary"
          className="chat-text"
        >
          Katrina Winters
        </Typography>
        <Typography
          variant="subtitle1"
          color="secondary"
          sx={{
            fontSize: ".7rem",
            ...lineClamp1,
          }}
          className="chat-text"
        >
          You are the best tohid!
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", marginLeft: "auto" }}>
        <Typography
          variant="subtitle1"
          component="span"
          color="secondary"
          sx={{ fontSize: ".7rem" }}
          className="chat-text"
        >
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

export default ChatMessage;
