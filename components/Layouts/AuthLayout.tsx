import { PropsWithChildren } from "react";
import { Chat } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        width: { md: "100vw" },
        flexDirection: { xs: "column ", md: "row" },
        height: { md: "100vh" },
        minHeight: "100vh",
        backgroundColor: "success.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "space-between" },
          width: { xs: "100%", md: "33%" },
          padding: { xs: "20px", md: "48px" },
          zIndex: 1,
        }}
      >
        <Box>
          <Box
            sx={{ display: "flex", justifyContent: { xs: "center", md: "start" }, alignItems: "center", gap: "16px" }}
          >
            <Chat sx={{ color: "#fff", fontSize: "1.8rem" }} />
            <Typography component="h1" sx={{ fontSize: "1.4rem", fontWeight: 500 }}>
              JusTalk
            </Typography>
          </Box>
          <Typography component="h4" sx={{ color: "#ffffff80", mt: 1, textAlign: { xs: "center", md: "left" } }}>
            Fast And Secure Messenger
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Image
            src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667648893/jusTalk/xo8edelzz3zdcim9wgrm.png"
            alt="auth"
            width={560}
            height={400}
          />
        </Box>
      </Box>
      <Box sx={{ flexGrow: "1", p: { xs: 1, sm: 2, md: 4 } }}>
        <Box
          sx={{
            height: "100%",
            borderRadius: "15px",
            backgroundColor: "common.white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "70%", md: "50%" },
              maxWidth: "500px",
              padding: { xs: "50px 0", md: "0" },
              zIndex: "2",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthLayout;
