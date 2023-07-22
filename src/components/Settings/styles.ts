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

export const accordionItemStyles = {
  borderBottom: "1px solid",
  borderBottomColor: "common.grey100",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "50px",
  h5: { fontSize: ".75rem", fontWeight: 500 },
};

export const accordionSelectStyles = {
  minWidth: 80,
  "&:hover .MuiOutlinedInput-notchedOutline , .MuiOutlinedInput-notchedOutline , .Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      borderColor: (theme: any) => (theme.palette.mode === "light" ? "#e6ebf5" : "#333"),
    },
  "& .MuiInputBase-root": {
    padding: "8px 0px 8px 10px !important",
    fontSize: ".75rem",
    cursor: "default",
    color: (theme: any) => (theme.palette.mode === "light" ? "common.black" : "common.grey200"),
  },
  "& .MuiSelect-select": { paddingRight: "26px !important", padding: "0px " },
  "& .MuiSvgIcon-root": {
    color: (theme: any) => (theme.palette.mode === "light" ? "common.black" : "common.grey200"),
  },
};
