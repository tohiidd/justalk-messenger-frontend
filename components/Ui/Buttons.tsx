import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SuccessButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: "white",
  fontSize: ".7rem",
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));

export const OutlineButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.success.main,
  fontSize: ".7rem",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
}));

export const FormButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: "white",
  width: "100%",
  height: "40px",
  fontSize: ".8rem",
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));

export const GreyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.grey100,
  color: "#212529",
  width: "50%",
  height: "40px",
  fontSize: ".8rem",
  "&:hover": {
    backgroundColor: theme.palette.common.grey100,
  },
}));
