import { useState } from "react";
import { Box } from "@mui/material";
import VoiceCallModal from "components/Modals/VoiceCallModal";
import { TabPanelTitle } from "components/Ui/TabPanel";
import { chatMessageContainerStyles } from "../Chats/styles";
import Call from "./Call";
import { calls } from "./data";

function Calls() {
  const [openVoiceCall, setOpenVoiceCall] = useState(false);
  const [callId, setCallId] = useState("");

  const handleToggle = (type: string, id: string) => () => {
    if (type === "voice") {
      setOpenVoiceCall((prev) => !prev);
    }
    setCallId(id);
  };
  return (
    <Box>
      <Box sx={{ p: 3, pb: 0, mb: 2 }}>
        <TabPanelTitle>Calls</TabPanelTitle>
      </Box>
      <Box sx={{ ...chatMessageContainerStyles, height: { xs: "calc(100vh - 70px)" } }}>
        {calls.map((call) => (
          <Call key={call.id} call={call} handleToggle={handleToggle} />
        ))}
      </Box>
      {openVoiceCall && (
        <VoiceCallModal openVoiceCall={openVoiceCall} setOpenVoiceCall={setOpenVoiceCall} callId={callId} />
      )}
    </Box>
  );
}

export default Calls;
