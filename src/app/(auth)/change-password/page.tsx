'use client';

import Link from "next/link";
import { useState } from "react";
import { Box, CircularProgress, FormControl, IconButton, Typography } from "@mui/material";
import { AvatarWrapper } from "components/Ui/AsideMenu";
import { DangerAlert, ErrorLabel, FormTitle, Label, SuccessAlert, visibleIconStyles } from "components/Ui/Form";
import { Input } from "components/Ui/Inputs";
import Image from "next/image";
import { useFormik } from "formik";
import { FormButton, GreyButton } from "components/Ui/Buttons";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { passwordSchema } from "utils/formikSchemas";

interface IValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (values: IValues) => {};

  const { values, errors, handleChange, handleSubmit, handleBlur, isSubmitting, touched } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit,
  });

  return (
      <form onSubmit={handleSubmit}>
        <Box textAlign="center" mb={6}>
          <FormTitle variant="h1">Change Password</FormTitle>
        </Box>
        <AvatarWrapper sx={{ justifyContent: "center" }}>
          <Box sx={{ position: "relative" }}>
            <Image
              src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
              alt="avatar"
              width={80}
              height={80}
            />
          </Box>
        </AvatarWrapper>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "500",
            textAlign: "center",
            mt: 1,
          }}
          variant="subtitle1"
          color="primary"
        >
          Kathryn Swarey
        </Typography>
        {/* {isError && <DangerAlert>{submitMessage}</DangerAlert>}
        {isSuccess && <SuccessAlert>{submitMessage}</SuccessAlert>} */}
        <Box>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Old Password</Label>
            <Input
              placeholder="Enter old password"
              type="password"
              id="oldPassword"
              value={values.oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors?.oldPassword && touched?.oldPassword ? "error" : ""}
            />
            {errors?.oldPassword && touched?.oldPassword && <ErrorLabel>{errors?.oldPassword}</ErrorLabel>}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>New Password</Label>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "100%", paddingRight: "30px" }}
                id="newPassword"
                type={showPassword ? "text" : "Password"}
                placeholder="Enter New Password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors?.newPassword && touched?.newPassword ? "error" : ""}
              />
              <IconButton sx={visibleIconStyles} onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            {errors?.newPassword && touched?.newPassword && <ErrorLabel>{errors?.newPassword}</ErrorLabel>}
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Label>Confirm New Password</Label>
            <Input
              placeholder="confirm new password"
              id="confirmNewPassword"
              value={values.confirmNewPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors?.confirmNewPassword && touched?.confirmNewPassword ? "error" : ""}
            />
            {errors?.confirmNewPassword && touched?.confirmNewPassword && (
              <ErrorLabel>{errors?.confirmNewPassword}</ErrorLabel>
            )}
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", mt: 3 }}>
          <FormButton type="submit" sx={{ width: "50%", minWidth: "unset" }}>
            {isSubmitting ? <CircularProgress sx={{ color: "#fff" }} size={30} /> : "Save"}
          </FormButton>
          <GreyButton LinkComponent={Link} href="/">
            Cancel
          </GreyButton>
        </Box>
      </form>
  );
}

