import { useState } from "react";
import { ExpandMore, Lock } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { SettingAccordion } from "components/Settings/Ui/Accordions";
import { AccordionProps } from "../types";
import { accordionItemStyles } from "../styles";
import { PrivacySwitch } from "../Ui/Switches";
import PrivacySelect from "../Ui/PrivacySelect";

function Privacy({ expanded, handleChange }: AccordionProps) {
  const [profileVisibility, setProfileVisibility] = useState("everybody");
  const [profileStatus, setProfileStatus] = useState("everybody");

  return (
    <SettingAccordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Lock sx={{ fontSize: "1.1rem" }} />
        <Typography className="summary-title">Privacy</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Profile photo</Typography>
          <PrivacySelect value={profileVisibility} setValue={setProfileVisibility} />
        </Box>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Last seen</Typography>
          <PrivacySwitch />
        </Box>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Display status</Typography>
          <PrivacySelect value={profileStatus} setValue={setProfileStatus} />
        </Box>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Read receipts</Typography>
          <PrivacySwitch />
        </Box>
      </AccordionDetails>
    </SettingAccordion>
  );
}

export default Privacy;
