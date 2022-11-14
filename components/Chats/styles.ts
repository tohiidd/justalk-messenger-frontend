export const lineClamp1Styles = {
  WebkitLineClamp: "1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};
export const chatMessageContainerStyles = {
  height: { xs: "calc(100vh - 235px )", md: "calc(100vh - 175px )" },
  maskImage: "linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px)",
  maskSize: "100% 20000px",
  maskPosition: " left bottom",
  WebkitMaskImage:
    " linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px)",
  WebkitMaskSize: " 100% 20000px",
  WebkitMaskPosition: " left bottom",
  transition: " all 0.3s, -webkit-mask-position 0.3s",
  overflowY: "overlay",
  "&::-webkit-scrollbar": { width: "10px" },
  "&::-webkit-scrollbar-track": { backgroundColor: "transparent", borderRadius: "100px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "secondary.main",
    borderRadius: "100px",
  },
  "&:hover": {
    // WebkitMaskPosition: "left top",
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
