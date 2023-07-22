export const modalWrapperStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 480,
  width: "95%",
  bgcolor: "common.white",
  boxShadow: 24,
  borderRadius: "8px",
};

export const modalHeaderStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 10px",
  borderBottom: "1px solid",
  borderBottomColor: "common.grey100",
};
export const buttonsWrapperStyles = {
  display: "flex",
  justifyContent: "end",
  gap: "6px",
  padding: "18px",
  borderTop: "1px solid",
  borderTopColor: "common.grey100",
};

export const callIconTextStyles = {
  fontSize: ".65rem",
  color: "common.grey200",
  fontWeight: 500,
  textAlign: "center",
  mt: "5px",
};

export const endCallButtonStyles = {
  backgroundColor: "error.main",
  color: "#fff",
  border: "6px solid",
  borderColor: "common.white",
  padding: "15px",
  "&:hover": {
    backgroundColor: "#cb3c5e",
  },
};

export const iconButtonStyles = { backgroundColor: "common.grey100", "&:hover": { backgroundColor: "common.grey100" } };
