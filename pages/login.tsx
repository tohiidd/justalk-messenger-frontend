import { useState } from "react";
import * as yup from "yup";
import { Box, CircularProgress, FormControl, FormControlLabel, IconButton } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { FormButton } from "components/Ui/Buttons";
import { Input } from "components/Ui/Inputs";
import Link from "next/link";
import {
  BpCheckBox,
  DangerAlert,
  ErrorLabel,
  FormSubtitle,
  FormTitle,
  Label,
  visibleIconStyles,
} from "components/Ui/Form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useLoginMutation } from "redux/auth/authApi";

interface IValues {
  username: string;
  password: string;
}

export const loginSchema = yup.object().shape({
  username: yup.string().required("Please enter username"),
  password: yup.string().required("Please enter password"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [login] = useLoginMutation();

  const onSubmit = async (values: IValues) => {
    console.log(values);
    const user = { username: values.username, password: values.password };
    try {
      const res = await login(user).unwrap();
      console.log(res);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <Box textAlign="center" mb={4}>
          <FormTitle variant="h1">Welcome Back</FormTitle>
          <FormSubtitle sx={{ mt: "0px !important" }}>Sign in to continue with JusTalk.</FormSubtitle>
        </Box>
        {errorMessage && <DangerAlert>{errorMessage}</DangerAlert>}
        <Box sx={{ mt: "4px" }}>
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
                id="password"
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
          <FormButton>{isSubmitting ? <CircularProgress sx={{ color: "#fff" }} size={30} /> : "Login"}</FormButton>
        </Box>
        <Box>
          <FormSubtitle>
            Don&apos;t have an account?<Link href="/register"> Register</Link>
          </FormSubtitle>
        </Box>
      </form>
    </AuthLayout>
  );
}
