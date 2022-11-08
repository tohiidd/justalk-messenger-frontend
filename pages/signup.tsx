import { useState } from "react";
import * as yup from "yup";
import { Box, CircularProgress, FormControl, IconButton, Typography } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { FormButton } from "components/Ui/Buttons";
import { Input } from "components/Ui/Inputs";
import Link from "next/link";
import { DangerAlert, ErrorLabel, FormSubtitle, FormTitle, Label, visibleIconStyles } from "components/Ui/Form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useSignupMutation } from "redux/auth/authApi";

interface IValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Please enter email"),
  username: yup.string().min(3, "Username must be at least 3 characters long").required("Please enter username"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, {
      message: "Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Please enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState({ main: false, confirm: false });
  const [errorMessage, setErrorMessage] = useState("");

  const [signup] = useSignupMutation();

  const onSubmit = async (values: IValues) => {
    console.log(values);
    const user = { email: values.email, username: values.username, password: values.password };
    try {
      const res = await signup(user).unwrap();
      console.log(res);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <Box textAlign="center" mb={4}>
          <FormTitle variant="h1">Register Account</FormTitle>
          <FormSubtitle sx={{ mt: "0px !important" }}>Get your free jusTalk account now.</FormSubtitle>
        </Box>
        {errorMessage && <DangerAlert>{errorMessage}</DangerAlert>}
        <Box sx={{ mt: "4px" }}>
          <FormControl sx={{ width: "100%" }}>
            <Label>Email</Label>
            <Input
              placeholder="Enter Email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors?.email && touched?.email ? "error" : ""}
            />
            {errors?.email && touched?.email && <ErrorLabel>{errors?.email}</ErrorLabel>}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Username</Label>
            <Input
              placeholder="Enter Username"
              id="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors?.username && touched?.username ? "error" : ""}
            />
            {errors?.username && touched?.username && <ErrorLabel>{errors?.username}</ErrorLabel>}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Password</Label>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                id="password"
                type={showPassword.main ? "Password" : "text"}
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors?.password && touched?.password ? "error" : ""}
              />
              <IconButton
                sx={visibleIconStyles}
                onClick={() => setShowPassword((prev) => ({ ...prev, main: !prev.main }))}
              >
                {showPassword.main ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            {errors?.password && touched?.password && <ErrorLabel>{errors?.password}</ErrorLabel>}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Confirm Password</Label>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                id="confirmPassword"
                type={showPassword.confirm ? "Password" : "text"}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors?.confirmPassword && touched?.confirmPassword ? "error" : ""}
              />
              <IconButton
                sx={visibleIconStyles}
                onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
              >
                {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            {errors?.confirmPassword && touched?.confirmPassword && <ErrorLabel>{errors?.confirmPassword}</ErrorLabel>}
          </FormControl>
        </Box>
        <Box>
          <Typography sx={{ fontSize: ".8rem", my: "14px", color: "common.black", a: { color: "success.main" } }}>
            By registering you agree to the JusTalk <Link href="#">Terms of Use</Link>
          </Typography>
        </Box>
        <Box>
          <FormButton>{isSubmitting ? <CircularProgress sx={{ color: "#fff" }} size={30} /> : "Register"}</FormButton>
        </Box>
        <Box>
          <FormSubtitle>
            Already have an account?<Link href="/login"> Login</Link>
          </FormSubtitle>
        </Box>
      </form>
    </AuthLayout>
  );
}
