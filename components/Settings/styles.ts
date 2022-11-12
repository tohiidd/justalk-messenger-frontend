export const iconButtonStyles = {
  backgroundColor: "common.grey100",
  padding: "6px",
  "&:hover": { backgroundColor: "common.grey100" },
};

export const infoInputStyles = {
  "& .MuiInputBase-root": {
    color: "common.black",
    fontSize: ".8rem",
    fontWeight: 500,
  },
  "&.standardMode": {
    "& .MuiInputBase-input": {
      cursor: "default",
    },
    "& .MuiInputBase-root::before": { borderBottom: "unset !important" },
    "& .MuiInputBase-root::after": { borderBottom: "unset !important" },
  },
};

export const infoLabelStyles = { fontSize: ".85rem", color: "common.grey200" };

export const avatarWrapperStyles = {
  height: "unset !important",
  marginTop: "-48px",
  zIndex: "2",
  position: "relative",
  cursor: "default",
  justifyContent: "center",
};

export const statusTitleStyles = {
  fontSize: ".9rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "common.grey200",
};
