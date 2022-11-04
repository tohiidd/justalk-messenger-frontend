import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AddFriendModal from "components/Modals/AddFriendModal";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import ChatMessage from "./ChatMessage";
import { chatMessageContainerStyles } from "./styles";

function Chats() {
  const [openAddContact, setOpenAddContact] = useState(false);
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", p: 3, pb: 0 }}>
          <TabPanelTitle>Chats</TabPanelTitle>
          <DarkTooltip placement="bottom" title="add contact">
            <AddContactBtn onClick={() => setOpenAddContact(true)}>
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
            {Array(15)
              .fill(null)
              .map((item, index) => (
                <ChatMessage key={index} />
              ))}
          </Box>
        </Box>
      </Box>
      <AddFriendModal openAddContact={openAddContact} setOpenAddContact={setOpenAddContact} />
    </>
  );
}

export default Chats;
