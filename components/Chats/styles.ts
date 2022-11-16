export const lineClamp1Styles = {
  WebkitLineClamp: "1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};
export const chatMessageContainerStyles = {
  height: { xs: "calc(100vh - 235px )", md: "calc(100vh - 175px )" },
  // maskImage: "linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px)",
  // maskSize: "100% 20000px",
  // maskPosition: " left bottom",
  // WebkitMaskImage:
  //   " linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px)",
  // WebkitMaskSize: " 100% 20000px",
  // WebkitMaskPosition: " left bottom",
  // transition: " all 0.3s, -webkit-mask-position 0.3s",
  overflowY: "overlay",
  // backgroundColor: "rgba(0,0,0,0)",
  // WebkitBackgroundClip: "text",
  // transition: " background-color .8s",
  // overflowY: "overlay",
  "&::-webkit-scrollbar": { width: "10px" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    borderRadius: "100px",
    // transition: "background-color 200ms ease-in-out",
  },
  "&::-webkit-scrollbar-thumb": {
    // backgroundColor: "inherit",

    // backgroundColor: "secondary.main",
    // opacity: 0,
    // borderRadius: "100px",
    // WebkitTransition: "all 500ms ",
    animation: " fadeOut .5s ease-in-out forwards",
    "@keyframes fadeOut": {
      "0%": {
        backgroundColor: "secondary.main",
      },
      "100%": {
        backgroundColor: "transparent",
      },
    },
  },
  // WebkitTransition: "all 200ms ease-in-out",
  "&:hover": {
    // backgroundColor: " rgba(0,0,0,0.18)",
    // WebkitMaskPosition: "left top",
    "&::-webkit-scrollbar-thumb": {
      //   backgroundColor: "secondary.main",
      //   // opacity: 1,
      //   borderRadius: "100px",
      animation: " fadeIn .5s ease-in-out forwards",
      "@keyframes fadeIn": {
        "0%": {
          backgroundColor: "transparent",
        },
        "100%": {
          backgroundColor: "secondary.main",
        },
      },
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
