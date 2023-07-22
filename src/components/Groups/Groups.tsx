import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";
import CreateGroupModal from "components/Modals/CreateGroupModal";
import Group from "./Group";
import Container from "components/Ui/Container";

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
        <Container sx={{ height: { xs: "calc(100vh - 235px )", md: "calc(100vh - 175px )" } }}>
          <Group />
        </Container>
      </Box>
      <CreateGroupModal openAddGroup={openAddGroup} setOpenAddGroup={setOpenAddGroup} />
    </>
  );
}

export default Groups;
