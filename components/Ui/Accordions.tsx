import { Accordion } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SettingAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "unset",
  borderTop: "1px solid",
  borderTopColor: theme.palette.common.grey100,
  backgroundColor: theme.palette.common.white,
  backgroundImage: "unset",
  color: theme.palette.common.black,
  "& .summary-title": {
    fontSize: ".8rem",
    fontWeight: 500,
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    gap: "10px",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.common.black,
    fontSize: "1.2rem",
  },
}));
