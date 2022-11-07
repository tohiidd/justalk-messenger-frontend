import { Box, Checkbox, CheckboxProps, FormLabel, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Label = styled(FormLabel)(({ theme }) => ({
  fontSize: ".8rem",
  fontWeight: "500",
  color: theme.palette.common.black,
  marginBottom: "8px",
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: "1.5rem",
  fontWeight: 500,
}));
export const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: ".8rem",
  textAlign: "center",
  marginTop: "10px",
  color: theme.palette.common.grey200,
  a: { color: theme.palette.success.main },
}));

export const ErrorLabel = styled(Typography)(({ theme }) => ({
  fontSize: ".7rem",
  marginTop: "2px",
  fontWeight: 500,
  color: theme.palette.error.main,
}));
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#2e2e2e" : "#fafafa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
  },
}));

export const visibleIconStyles = {
  position: "absolute",
  right: "0",
  "& .MuiSvgIcon-root": { color: "secondary.main", fontSize: "1rem" },
};

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#4eac6d",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#4eac6d",
  },
});

export const BpCheckBox = (props: CheckboxProps) => (
  <Checkbox
    sx={{
      "&:hover": { bgcolor: "transparent" },
    }}
    disableRipple
    color="default"
    checkedIcon={<BpCheckedIcon />}
    icon={<BpIcon />}
    inputProps={{ "aria-label": "Checkbox demo" }}
    {...props}
  />
);

export const DangerAlert = styled(Box)(({ theme }) => ({
  color: "#8f2b43",
  backgroundColor: "#fcdae2",
  border: "1px solid #fac8d4",
  borderRadius: "4px",
  padding: "12px 20px",
  fontSize: ".8rem",
  fontWeight: 500,
}));
