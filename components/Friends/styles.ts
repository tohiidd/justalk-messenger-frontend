export const friendsTitleStyles = {
  textTransform: "uppercase",
  color: "success.main",
  p: "10px 0 10px 28px",
  fontSize: ".8rem",
  fontWeight: 500,
  position: "relative",
  overflow: "hidden",
  "&:after": {
    content: '" "',
    position: "absolute",
    top: "50%",
    left: "50px",
    right: "0",
    backgroundColor: "common.grey100",
    width: "100%",
    height: "1px",
  },
};
