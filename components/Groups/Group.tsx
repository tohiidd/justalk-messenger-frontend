import { Box } from "@mui/material";
import { chatMessageStyles } from "components/Chats/styles";
import { FriendAvatar, FriendName } from "components/Ui/Friend";

function Group() {
  return (
    <Box sx={chatMessageStyles}>
      {/* <Image src="" alt="group" width={40} height={40} /> */}
      <FriendAvatar>G</FriendAvatar>
      <FriendName className="friend-name">#General</FriendName>
    </Box>
  );
}

export default Group;
