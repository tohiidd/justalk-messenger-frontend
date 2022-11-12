import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import AddFriendModal from "components/Modals/AddFriendModal";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import { chatMessageContainerStyles } from "components/Chats/styles";
import Friend from "./Friend";
import { friends } from "./data";
import { getAlphabeticalOrder } from "utils/getAlphabeticalOrder";
import { friendsTitleStyles } from "./styles";
import { IFriend } from "./types";

function Friends() {
  const [openAddFriend, setOpenAddFriend] = useState(false);

  const orderedFriends = getAlphabeticalOrder(friends);
  console.log(orderedFriends);

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
          {orderedFriends.map(([key, values]: any) => (
            <Box key={key}>
              <Box sx={friendsTitleStyles}>{key}</Box>
              {values.map((friend: IFriend) => (
                <Friend key={friend.id} friend={friend} />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <AddFriendModal openAddFriend={openAddFriend} setOpenAddFriend={setOpenAddFriend} />
    </>
  );
}

export default Friends;
