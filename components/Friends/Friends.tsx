import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import AddFriendModal from "components/Modals/AddFriendModal";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import { chatMessageContainerStyles } from "components/Chats/styles";
import Friend from "./Friend";

function Friends() {
  const [openAddFriend, setOpenAddFriend] = useState(false);

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", p: 3, pb: 0 }}>
          <TabPanelTitle>Friends</TabPanelTitle>
          <DarkTooltip placement="bottom" title="add contact">
            <AddContactBtn onClick={() => setOpenAddFriend(true)}>
              <Add className="add-icon" />
            </AddContactBtn>
          </DarkTooltip>
        </Box>
        <Box>
          <SearchBar />
        </Box>
        <Box sx={{ ...chatMessageContainerStyles, height: { xs: "calc(100vh - 202px)", md: "calc(100vh - 143px)" } }}>
          {Array(15)
            .fill(null)
            .map((item, index) => (
              <Friend key={index} />
            ))}
        </Box>
      </Box>
      <AddFriendModal openAddFriend={openAddFriend} setOpenAddFriend={setOpenAddFriend} />
    </>
  );
}

export default Friends;
