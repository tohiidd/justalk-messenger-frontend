import { useState, FormEvent } from "react";
import { Box, FormControl, IconButton, Typography } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { FormButton } from "components/Ui/Buttons";
import { Input } from "components/Ui/Inputs";
import Link from "next/link";
import { FormSubtitle, FormTitle, Label, visibleIconStyles } from "components/Ui/Form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Register() {
  const [showPassword, setShowPassword] = useState({ main: false, confirm: false });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <Box textAlign="center">
          <FormTitle variant="h1">Register Account</FormTitle>
          <FormSubtitle sx={{ mt: "0px !important" }}>Get your free jusTalk account now.</FormSubtitle>
        </Box>
        <Box sx={{ mt: "30px" }}>
          <FormControl sx={{ width: "100%" }}>
            <Label>Email</Label>
            <Input placeholder="Enter Email" />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Username</Label>
            <Input placeholder="Enter Username" />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Password</Label>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                type={showPassword.main ? "Password" : "text"}
                placeholder="Enter Password"
              />
              <IconButton
                sx={visibleIconStyles}
                onClick={() => setShowPassword((prev) => ({ ...prev, main: !prev.main }))}
              >
                {showPassword.main ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>{" "}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Confirm Password</Label>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                type={showPassword.confirm ? "Password" : "text"}
                placeholder="Confirm Password"
              />
              <IconButton
                sx={visibleIconStyles}
                onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
              >
                {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Typography sx={{ fontSize: ".8rem", my: "14px", color: "common.black", a: { color: "success.main" } }}>
            By registering you agree to the JusTalk <Link href="#">Terms of Use</Link>
          </Typography>
        </Box>
        <Box>
          <FormButton>Register</FormButton>
        </Box>
        <Box>
          <FormSubtitle>
            Already have an account?<Link href="#"> Login</Link>
          </FormSubtitle>
        </Box>
      </form>
    </AuthLayout>
  );
}
