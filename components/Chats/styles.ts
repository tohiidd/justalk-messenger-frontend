export const lineClamp1Styles = {
  WebkitLineClamp: "1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};
export const chatMessageStyles = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  p: "6px 24px",
  cursor: "pointer",
  transition: "all 200ms",
  "&:hover": { backgroundColor: "common.grey100" },
  "&.active": {
    backgroundColor: "success.main",
    "& .friend-name": {
      color: "#fff",
    },
  },
  img: {
    borderRadius: "50%",
  },
};

export const avatarStyles = {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 500,
  textTransform: "uppercase",
  backgroundColor: "#ffd166",
};
