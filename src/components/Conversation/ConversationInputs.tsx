import {useState} from "react";
import {MicNone, MoreHoriz, Send, SentimentSatisfiedAlt} from "@mui/icons-material";
import {Box, FormControl, IconButton, useTheme} from "@mui/material";
import {SuccessButton} from "components/Ui/Buttons";
import {Input} from "components/Ui/Inputs";

function ConversationInputs() {
  const [messageInput, setMessageInput] = useState("");
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        height: "12%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "common.softWhite",
        backdropFilter: "blur(7px)",
        borderTop: "1px solid ",
        borderTopColor: theme.palette.mode === "light" ? "#eaeaf1" : "#333",
        padding: {xs: "15px", md: "25px"},
      }}
    >
      <IconButton>
        <MoreHoriz sx={{color: "common.grey200"}} />
      </IconButton>
      <IconButton>
        <SentimentSatisfiedAlt sx={{color: "common.grey200"}} />
      </IconButton>
      <FormControl sx={{width: "100%"}}>
        <Input
          placeholder="Type your message..."
          sx={{height: "45px", borderRadius: "8px", marginX: "5px"}}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
      </FormControl>
      <IconButton sx={{display: {xs: "none", md: "block"}}}>
        <MicNone sx={{color: "common.grey200"}} />
      </IconButton>
      <SuccessButton sx={{minWidth: "43px", height: "43px", opacity: messageInput.length === 0 ? ".7" : "1"}}>
        <Send />
      </SuccessButton>
    </Box>
  );
}

export default ConversationInputs;
