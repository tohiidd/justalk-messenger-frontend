import { Box, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FriendName = styled((props: TypographyProps) => (
  <Typography {...props} component="span" color="primary" />
))(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: ".9rem",
  fontWeight: 500,
  flexGrow: "1",
  WebkitLineClamp: "1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

export const FriendAvatar = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 500,
  textTransform: "uppercase",
  backgroundColor: "#ffd166",
  aspectRatio: "1",
}));
