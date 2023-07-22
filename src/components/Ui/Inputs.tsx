import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input = styled(OutlinedInput)(({ theme }) => ({
  height: "40px",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#333",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid ",
    borderColor: `${theme.palette.mode === "light" ? "#e6ebf5" : "#333"} !important`,
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid ",
    borderColor: `${theme.palette.mode === "light" ? "#cfd4dd" : "#333"} !important`,
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: ".8rem",
  },
  "&.error": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.error.main} !important`,
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.error.main} !important`,
    },
  },
  "& input:-internal-autofill-previewed , input:-internal-autofill-selected": {
    WebkitBoxShadow: " 0 0 0 30px white inset !important",
  },
}));
