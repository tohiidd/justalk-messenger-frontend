export const lineClamp1Styles = {
  WebkitLineClamp: "1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};
export const chatMessageContainerStyles = {
  height: { xs: "calc(100vh - 235px )", md: "calc(100vh - 175px )" },
  "&::-webkit-scrollbar": { width: "10px" },
  overflow: "overlay",
  "&::-webkit-scrollbar-track": { backgroundColor: "transparent", borderRadius: "100px" },
  "&::-webkit-scrollbar-thumb": {
    visibility: "hidden",
    backgroundColor: "secondary.main",
    borderRadius: "100px",
  },
  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      visibility: "visible",
    },
  },
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
