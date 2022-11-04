import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AddFriendModal from "components/Modals/AddFriendModal";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import ChatMessage from "./ChatMessage";

function ChatList() {
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
          <Box
            sx={{
              height: { xs: "calc(100vh - 235px )", md: "calc(100vh - 175px )" },
              "&::-webkit-scrollbar": { width: "10px" },
              overflow: "overlay",
              "&::-webkit-scrollbar-track": { backgroundColor: "transparent", borderRadius: "100px" },
              "&::-webkit-scrollbar-thumb": {
                visibility: "hidden",
                backgroundColor: "secondary.main",
                borderRadius: "100px",
              },
              "&:hover": {
                "&::-webkit-scrollbar-thumb": {
                  visibility: "visible",
                },
              },
            }}
          >
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

export default ChatList;
