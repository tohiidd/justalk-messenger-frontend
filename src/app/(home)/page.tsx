"use client";

import GetStartedConversation from "components/Conversation/GetStartedConversation";
import Conversation from "components/Conversation/Conversation";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import {useSearchParams} from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {defaultMatches: true});
  console.log(!id && isMd);

  return (
    <Box
      component="section"
      sx={{
        display: "block",
        width: "100%",
        position: {xs: "absolute", md: "static"},
        top: "0",
        right: id ? "0" : "-1000px",
        backgroundImage:
          "url(https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667645283/jusTalk/eoojdubgmbo3jcnmssqc.png)",
        backgroundColor: "common.grey",
        transition: "all 200ms ease-in-out",
      }}
    >
      {!id && isMd ? <GetStartedConversation /> : <Conversation />}
    </Box>
  );
}
