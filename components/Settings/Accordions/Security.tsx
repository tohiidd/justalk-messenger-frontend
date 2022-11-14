import { ExpandMore, VerifiedUser } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { SettingAccordion } from "components/Settings/Ui/Accordions";
import { AccordionProps } from "../types";
import { accordionItemStyles } from "../styles";
import { PrivacySwitch } from "../Ui/Switches";

function Security({ expanded, handleChange }: AccordionProps) {
  return (
    <SettingAccordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <VerifiedUser sx={{ fontSize: "1.1rem" }} />
        <Typography className="summary-title">Security</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Show notifications</Typography>
          <PrivacySwitch />
        </Box>
      </AccordionDetails>
    </SettingAccordion>
  );
}

export default Security;
