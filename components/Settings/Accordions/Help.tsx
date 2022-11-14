import { ExpandMore, Help as HelpIcon } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { SettingAccordion } from "components/Settings/Ui/Accordions";
import { AccordionProps } from "../types";
import { accordionItemStyles } from "../styles";

function Help({ expanded, handleChange }: AccordionProps) {
  return (
    <SettingAccordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <HelpIcon sx={{ fontSize: "1.1rem" }} />
        <Typography className="summary-title">Help</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">FAQs</Typography>
        </Box>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Contact</Typography>
        </Box>
        <Box sx={accordionItemStyles}>
          <Typography component="h5">Terms & Privacy policy</Typography>
        </Box>
      </AccordionDetails>
    </SettingAccordion>
  );
}

export default Help;
