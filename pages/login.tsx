import { FormEvent, useState } from "react";
import { Box, FormControl, FormControlLabel, IconButton } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { FormButton } from "components/Ui/Buttons";
import { Input } from "components/Ui/Inputs";
import Link from "next/link";
import { BpCheckBox, FormSubtitle, FormTitle, Label, visibleIconStyles } from "components/Ui/Form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <Box textAlign="center">
          <FormTitle variant="h1">Welcome Back</FormTitle>
          <FormSubtitle sx={{ mt: "0px !important" }}>Sign in to continue with JusTalk.</FormSubtitle>
        </Box>
        <Box sx={{ mt: "30px" }}>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Username</Label>
            <Input placeholder="Enter Username" />
          </FormControl>
          <FormControl
            sx={{ width: "100%", mt: 2, a: { fontSize: ".8rem", color: "common.grey200", fontWeight: 500 } }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Label>Password</Label>
              <Link href="#">Forget password?</Link>
            </Box>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                type={showPassword ? "text" : "Password"}
                placeholder="Enter Password"
              />
              <IconButton sx={visibleIconStyles} onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
          </FormControl>
        </Box>
        <Box>
          <FormControlLabel
            control={<BpCheckBox />}
            label="Remember me "
            sx={{
              mb: 2,
              mt: 1,
              "& .MuiTypography-root": { color: "common.black", fontSize: ".8rem", fontWeight: 500 },
            }}
          />
        </Box>
        <Box>
          <FormButton>Login</FormButton>
        </Box>
        <Box>
          <FormSubtitle>
            Don&apos;t have an account?<Link href="#"> Register</Link>
          </FormSubtitle>
        </Box>
      </form>
    </AuthLayout>
  );
}
