import { FormEvent } from "react";
import { Box, FormControl, FormLabel, Typography } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { SuccessButton } from "components/Ui/Buttons";
import { Input } from "components/Ui/Inputs";
import Link from "next/link";

export default function Register() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <Box textAlign="center">
          <Typography component="h1" sx={{ color: "common.black", fontSize: "1.5rem", fontWeight: 500 }}>
            Register Account
          </Typography>
          <Typography sx={{ color: "common.grey200", fontSize: ".8rem" }}>
            Get your free jusTalk account now.
          </Typography>
        </Box>
        <Box sx={{ mt: "30px" }}>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel sx={{ fontSize: ".8rem", fontWeight: "500", color: "common.black", mb: 1 }}>Email</FormLabel>
            <Input placeholder="Enter Email" />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <FormLabel sx={{ fontSize: ".8rem", fontWeight: "500", color: "common.black", mb: 1 }}>Username</FormLabel>
            <Input placeholder="Enter Username" />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <FormLabel sx={{ fontSize: ".8rem", fontWeight: "500", color: "common.black", mb: 1 }}>Password</FormLabel>
            <Input type="Password" placeholder="Enter Password" />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <FormLabel sx={{ fontSize: ".8rem", fontWeight: "500", color: "common.black", mb: 1 }}>
              Confirm Password
            </FormLabel>
            <Input type="Password" placeholder="Enter Password" />
          </FormControl>
        </Box>
        <Box>
          <Typography sx={{ fontSize: ".8rem", my: "14px", color: "common.black", a: { color: "success.main" } }}>
            By registering you agree to the JusTalk <Link href="#">Terms of Use</Link>
          </Typography>
        </Box>
        <Box>
          <SuccessButton sx={{ width: "100%", height: "40px", fontSize: ".8rem" }}>Register</SuccessButton>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: ".8rem",
              textAlign: "center",
              mt: "10px",
              color: "common.grey200",
              a: { color: "success.main" },
            }}
          >
            Already have an account?<Link href="#"> Login</Link>
          </Typography>
        </Box>
      </form>
    </AuthLayout>
  );
}
