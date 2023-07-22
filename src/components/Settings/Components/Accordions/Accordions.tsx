import { Accordion } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SettingAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "unset",
  borderTop: "1px solid",
  borderTopColor: theme.palette.common.grey100,
  backgroundColor: theme.palette.common.white,
  backgroundImage: "unset",
  color: theme.palette.common.black,
  "&.MuiPaper-root": {
    margin: "0",
  },
  "&.MuiPaper-root::before": { opacity: "0" },

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
  "& .MuiAccordionSummary-root": {
    transition: "all 200ms",
  },
  "& .MuiAccordionSummary-root.Mui-expanded": {
    backgroundColor: theme.palette.mode === "light" ? "#f6f6f9b3" : "#2e2e2e",
    minHeight: "48px",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "0",
  },
}));
