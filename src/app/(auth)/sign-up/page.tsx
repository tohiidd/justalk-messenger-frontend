'use client';

import Link from 'next/link'
import { useState } from "react";
import { Box, CircularProgress, FormControl, IconButton, Typography } from "@mui/material";
import { FormButton } from "components/Ui/Buttons";
import { Input } from "components/Ui/Inputs";
import {
  DangerAlert,
  ErrorLabel,
  FormSubtitle,
  FormTitle,
  Label,
  SuccessAlert,
  visibleIconStyles,
} from "components/Ui/Form";
import { CancelOutlined, CheckCircleOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { registerSchema } from "utils/formikSchemas";

interface IValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameUnique, setIsUsernameUnique] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");



  const checkUniqueUsername = async () => {
  };

  const onSubmit = async (values: IValues) => {
    // const avatarColor = getUserAvatarColor();
    // const user = { email: values.email, username: values.username, password: values.password, avatarColor };
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
      <form onSubmit={handleSubmit}>
        <Box textAlign="center" mb={4}>
          <FormTitle variant="h1">Register Account</FormTitle>
          <FormSubtitle sx={{ mt: "4px !important" }}>Get your free jusTalk account now.</FormSubtitle>
        </Box>
        {/* {isError && <DangerAlert>{submitMessage}</DangerAlert>}
        {isSuccess && <SuccessAlert>{submitMessage}</SuccessAlert>} */}
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
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                placeholder="Enter Username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                  checkUniqueUsername();
                }}
                className={errors?.username && touched?.username ? "error" : ""}
              />
              <Box sx={{ position: "absolute", right: "6px", height: "100%", display: "flex", alignItems: "center" }}>
                {/* {isLoading && <CircularProgress sx={{ color: "secondary.main" }} size={15} />} 
                 {isUsernameUnique && touched.username && !isLoading && values.username.length !== 0 && (
                  <CheckCircleOutline fontSize="small" sx={{ color: "success.main" }} />
                )}
                {!isUsernameUnique && touched.username && !isLoading && (
                  <CancelOutlined fontSize="small" sx={{ color: "error.main" }} />
                )} */}
              </Box>
            </Box>
            {errors?.username && touched?.username && <ErrorLabel>{errors?.username}</ErrorLabel>}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Password</Label>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors?.password && touched?.password ? "error" : ""}
              />
              <IconButton sx={visibleIconStyles} onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
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
                type="text"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors?.confirmPassword && touched?.confirmPassword ? "error" : ""}
              />
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
          <FormButton type="submit">
            {isSubmitting ? <CircularProgress sx={{ color: "#fff" }} size={30} /> : "Register"}
          </FormButton>
        </Box>
        <Box>
          <FormSubtitle>
            Already have an account?<Link href="/login"> Login</Link>
          </FormSubtitle>
        </Box>
      </form>
  );
}
