import { Box, Typography } from "@mui/material";
import Image from "next/image";

function ConversationTopBar() {
  return (
    <Box sx={{ position: "fixed", backgroundColor: "common.softWhite" }}>
      <Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", img: { borderRadius: "50%" } }}>
              <Image
                src={"https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667375697/jusTalk/zewq69s3crcubsawfsa9.jpg"}
                alt="user pic"
                width={40}
                height={40}
              />
            </Box>
            <Box>
              <Typography component="h6" color="common.black">
                Marguerite Campbell
              </Typography>
              <Typography color="common.black">active</Typography>
            </Box>
          </Box>
          {/* {!image && <FriendAvatar sx={{ bgcolor: avatarColor }}>{avatarText}</FriendAvatar>} */}
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default ConversationTopBar;
