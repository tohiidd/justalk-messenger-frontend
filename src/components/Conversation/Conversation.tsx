import {Box} from "@mui/material";
import ConversationContent from "./ConversationContent";
import ConversationInputs from "./ConversationInputs";
import ConversationTopBar from "./ConversationTopBar";

function Conversation() {
  return (
    <Box sx={{position: "relative ", width: "100%", height: "100%"}}>
      <ConversationTopBar />
      <ConversationContent />
      <ConversationInputs />
    </Box>
  );
}

export default Conversation;
