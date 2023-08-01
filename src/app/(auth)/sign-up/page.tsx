"use client";

import Link from "next/link";
import {useState, useContext, useEffect} from "react";
import {Box, CircularProgress, FormControl, IconButton, Typography} from "@mui/material";
import {FormButton} from "components/Ui/Buttons";
import {Input} from "components/Ui/Inputs";
import {
  DangerAlert,
  ErrorLabel,
  FormSubtitle,
  FormTitle,
  Label,
  SuccessAlert,
  visibleIconStyles,
} from "components/Ui/Form";
import {CancelOutlined, CheckCircleOutline, Visibility, VisibilityOff} from "@mui/icons-material";
import {useFormik} from "formik";
import {registerSchema} from "utils/formikSchemas";
import {useFindByUsername, useRegisterUser} from "hooks/useUser";
import {getUserAvatarColor} from "utils/getUserAvatar";
import {useRouter} from "next/navigation";
import {AuthContext} from "context/AuthContext";
import {useDebounce} from "hooks/useDebounce";

interface IValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const {setCredentials} = useContext(AuthContext);

  const {replace} = useRouter();

  const [registerUser, {data, error}] = useRegisterUser();
  const [findByUsername, {loading, error: findUserError}] = useFindByUsername();

  const checkUniqueUsername = async () => {
    findByUsername({variables: {username: values.username}});
    setUserLoading(false);
  };

  const findUser = useDebounce(checkUniqueUsername, 2000);

  const onSubmit = async (values: IValues) => {
    const avatarColor = getUserAvatarColor();
    const user = {
      email: values.email,
      username: values.username,
      password: values.password,
      avatarColor,
      rememberMe: true,
    };
    const res = await registerUser({variables: user});

    if (res) {
      const {access_token: token, user} = res.data.register;
      setCredentials(token, user);
      replace("/");
    }
  };

  const {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched} = useFormik({
    initialValues: {
      email: "test@gmail.com",
      username: "test",
      password: "Test123",
      confirmPassword: "Test123",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  useEffect(() => {
    findUser();
  }, [values.username]);

  return (
    <form onSubmit={handleSubmit}>
      <Box textAlign="center" mb={4}>
        <FormTitle variant="h1">Register Account</FormTitle>
        <FormSubtitle sx={{mt: "4px !important"}}>Get your free jusTalk account now.</FormSubtitle>
      </Box>
      {error && <DangerAlert>{error?.message}</DangerAlert>}
      {data && <SuccessAlert>Register User Successfully</SuccessAlert>}
      <Box sx={{mt: "4px"}}>
        <FormControl sx={{width: "100%"}}>
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
        <FormControl sx={{width: "100%", mt: 2}}>
          <Label>Username</Label>
          <Box sx={{position: "relative", display: "flex", alignItems: "center"}}>
            <Input
              sx={{width: "100%", paddingRight: "30px"}}
              placeholder="Enter Username"
              id="username"
              value={values.username}
              onChange={(e) => {
                handleChange(e);
                setUserLoading(true);
              }}
              onBlur={handleBlur}
              className={errors?.username && touched?.username ? "error" : ""}
            />
            <Box sx={{position: "absolute", right: "6px", height: "100%", display: "flex", alignItems: "center"}}>
              {loading && <CircularProgress sx={{color: "secondary.main"}} size={15} />}
              {findUserError && touched.username && !userLoading && values.username.length !== 0 && (
                <CheckCircleOutline fontSize="small" sx={{color: "success.main"}} />
              )}
              {!findUserError && touched.username && !userLoading && (
                <CancelOutlined fontSize="small" sx={{color: "error.main"}} />
              )}
              {userLoading && <CircularProgress sx={{color: "#262626"}} size={20} />}
            </Box>
          </Box>
          {errors?.username && touched?.username && <ErrorLabel>{errors?.username}</ErrorLabel>}
        </FormControl>
        <FormControl sx={{width: "100%", mt: 2}}>
          <Label>Password</Label>
          <Box sx={{position: "relative", display: "flex", alignItems: "center"}}>
            <Input
              sx={{width: "100%", paddingRight: "30px"}}
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
        <FormControl sx={{width: "100%", mt: 2}}>
          <Label>Confirm Password</Label>
          <Box sx={{position: "relative", display: "flex", alignItems: "center"}}>
            <Input
              sx={{width: "100%", paddingRight: "30px"}}
              id="confirmPassword"
              type="password"
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
        <Typography sx={{fontSize: ".8rem", my: "14px", color: "common.black", a: {color: "success.main"}}}>
          By registering you agree to the JusTalk <Link href="#">Terms of Use</Link>
        </Typography>
      </Box>
      <Box>
        <FormButton type="submit">
          {isSubmitting ? <CircularProgress sx={{color: "#fff"}} size={30} /> : "Register"}
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
