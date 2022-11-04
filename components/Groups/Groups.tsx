import { useState } from "react";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import CreateGroupModal from "components/Modals/CreateGroupModal";
import { avatarStyles, chatMessageContainerStyles, chatMessageStyles, lineClamp1Styles } from "components/Chats/styles";

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
          <Box sx={chatMessageStyles}>
            {/* <Image src="" alt="group" width={40} height={40} /> */}
            <Box sx={avatarStyles}>G</Box>
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: ".9rem",
                fontWeight: "500",
                flexGrow: "1",
                ...lineClamp1Styles,
              }}
              variant="subtitle1"
              color="primary"
              className="text"
            >
              #General
            </Typography>
          </Box>
        </Box>
      </Box>
      <CreateGroupModal openAddGroup={openAddGroup} setOpenAddGroup={setOpenAddGroup} />
    </>
  );
}

export default Groups;
