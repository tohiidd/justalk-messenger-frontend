import { useState } from "react";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import CreateGroupModal from "components/Modals/CreateGroupModal";
import { avatarStyles, chatMessageContainerStyles, chatMessageStyles, lineClamp1Styles } from "components/Chats/styles";
import { FriendAvatar, FriendName } from "components/Ui/Friend";
import Group from "./Group";

function Groups() {
  const [openAddGroup, setOpenAddGroup] = useState(false);

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", p: 3, pb: 0 }}>
          <TabPanelTitle>Groups</TabPanelTitle>
          <DarkTooltip placement="bottom" title="create group">
            <AddContactBtn onClick={() => setOpenAddGroup(true)}>
              <Add className="add-icon" />
            </AddContactBtn>
          </DarkTooltip>
        </Box>
        <Box>
          <SearchBar />
        </Box>
        <Box sx={chatMessageContainerStyles}>
          <Group />
        </Box>
      </Box>
      <CreateGroupModal openAddGroup={openAddGroup} setOpenAddGroup={setOpenAddGroup} />
    </>
  );
}

export default Groups;
