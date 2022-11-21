import { Person } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { FormButton } from "components/Ui/Buttons";
import Link from "next/link";

export default function Logout() {
  return (
    <AuthLayout>
      <Box textAlign="center">
        <Box
          sx={{
            backgroundColor: "common.lightGreen",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Person color="success" fontSize="large" />
        </Box>
        <Typography sx={{ mt: "20px", color: "common.black", fontWeight: 500 }}>You are Logged Out</Typography>
        <Typography
          sx={{
            mt: "6px",
            mb: "20px",
            color: "common.grey200",
            fontSize: ".8rem",
            span: { color: "common.black", fontWeight: 500 },
          }}
        >
          Thanks for using <span>JusTalk</span>
        </Typography>
        <Link href="/auth/login">
          <FormButton>Sign In</FormButton>
        </Link>
      </Box>
    </AuthLayout>
  );
}
