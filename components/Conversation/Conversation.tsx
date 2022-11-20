import { Box } from "@mui/material";
import ConversationContent from "./ConversationContent";
import ConversationInputs from "./ConversationInputs";
import ConversationTopBar from "./ConversationTopBar";

function Conversation() {
  return (
    <Box sx={{}}>
      <ConversationTopBar />
      <ConversationContent />
      <ConversationInputs />
    </Box>
  );
}

export default Conversation;
