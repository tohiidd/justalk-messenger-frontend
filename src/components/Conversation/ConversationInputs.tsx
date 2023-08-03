import {useEffect, useRef, useState} from "react";
import {EmojiClickData} from "emoji-picker-react";
import {MicNone, MoreHoriz, Send, SentimentSatisfiedAlt} from "@mui/icons-material";
import {Box, FormControl, IconButton, useTheme} from "@mui/material";
import {SuccessButton} from "components/Ui/Buttons";
import {Input} from "components/Ui/Inputs";
import dynamic from "next/dynamic";
import {useOnClickOutside} from "hooks/useClickOutside";

const Picker = dynamic(() => import("emoji-picker-react"), {ssr: false});

function ConversationInputs() {
  const [messageInput, setMessageInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const messageInputRef = useRef<HTMLInputElement>(null);
  const emojiBoxRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useOnClickOutside(emojiBoxRef, () => setShowPicker(false));

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setMessageInput((prevInput) => prevInput + emojiObject.emoji);
    messageInputRef?.current?.focus();
  };

  useEffect(() => {
    messageInputRef?.current?.focus();
  }, []);

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
      <Box
        sx={{
          transition: "all 200ms ease-in-out",
          "&:hover .emoji-box": {opacity: {md: "1"}, visibility: {md: "visible"}},
        }}
        ref={emojiBoxRef}
      >
        <Box
          className="emoji-box"
          sx={{
            position: "absolute",
            bottom: "70px",
            opacity: {xs: showPicker ? "1" : "0", md: "0"},
            visibility: {xs: showPicker ? "visible" : "hidden", md: "hidden"},
          }}
        >
          <Picker onEmojiClick={onEmojiClick} lazyLoadEmojis />
        </Box>
        <IconButton onClick={() => setShowPicker((prev) => !prev)}>
          <SentimentSatisfiedAlt sx={{color: "common.grey200"}} />
        </IconButton>
      </Box>
      <FormControl sx={{width: "100%"}}>
        <Input
          placeholder="Type your message..."
          sx={{height: "45px", borderRadius: "8px", marginX: "5px"}}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          inputRef={messageInputRef}
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
