import { Add, Search } from "@mui/icons-material";
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchBar from "components/SearchBar/SearchBar";
import { DarkTooltip } from "components/Ui/AsideMenu";
import { AddContactBtn, TabPanelTitle } from "components/Ui/TabPanel";

function ChatList() {
  return (
    <section>
      <Box>
        <Box sx={{ display: "flex", p: 3, pb: 0 }}>
          <TabPanelTitle>Chat</TabPanelTitle>
          <DarkTooltip placement="bottom" title="add contact">
            <AddContactBtn>
              <Add className="add-icon" />
            </AddContactBtn>
          </DarkTooltip>
        </Box>
        <Box>
          <SearchBar />
        </Box>
      </Box>
    </section>
  );
}

export default ChatList;
