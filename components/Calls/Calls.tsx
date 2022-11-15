import { SouthWest, VideocamOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { TabPanelTitle } from "components/Ui/TabPanel";
import Image from "next/image";
import { chatMessageContainerStyles, lineClamp1Styles } from "../Chats/styles";
import Call from "./Call";
import { calls } from "./data";

function Calls() {
  return (
    <Box>
      <Box sx={{ p: 3, pb: 0, mb: 2 }}>
        <TabPanelTitle>Calls</TabPanelTitle>
      </Box>
      <Box sx={{ ...chatMessageContainerStyles, height: { xs: "calc(100vh - 70px)" } }}>
        {calls.map((call) => (
          <Call key={call.id} call={call} />
        ))}
      </Box>
    </Box>
  );
}

export default Calls;
