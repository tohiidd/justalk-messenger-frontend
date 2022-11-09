import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AddFriendModal from "components/Modals/AddFriendModal";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import ChatMessage from "./Chat";
import { chatMessageContainerStyles } from "./styles";
import { chats } from "./data";

function Chats() {
  const [openAddFriend, setOpenAddFriend] = useState(false);
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", p: 3, pb: 0 }}>
          <TabPanelTitle>Chats</TabPanelTitle>
          <DarkTooltip placement="bottom" title="add contact">
            <AddContactBtn onClick={() => setOpenAddFriend(true)}>
              <Add className="add-icon" />
            </AddContactBtn>
          </DarkTooltip>
        </Box>
        <Box>
          <SearchBar />
        </Box>
        <Box>
          <Typography color="secondary" component="h4" fontSize=".7rem" mb={2} fontWeight="500" sx={{ px: 3 }}>
            RECENT
          </Typography>
          <Box sx={chatMessageContainerStyles}>
            {chats.map((chat) => (
              <ChatMessage key={chat.id} chat={chat} />
            ))}
          </Box>
        </Box>
      </Box>
      <AddFriendModal openAddFriend={openAddFriend} setOpenAddFriend={setOpenAddFriend} />
    </>
  );
}

export default Chats;
