import { Box } from "@mui/material";
import AuthLayout from "components/Layouts/AuthLayout";
import { AvatarWrapper } from "components/Ui/AsideMenu";
import { FormTitle } from "components/Ui/Form";
import Image from "next/image";

function ChangePassword() {
  return (
    <AuthLayout>
      <form>
        <Box textAlign="center" mb={4}>
          <FormTitle variant="h1">Change Password</FormTitle>
        </Box>
        <AvatarWrapper>
          <Box sx={{ position: "relative" }}>
            <Image
              src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
              alt="avatar"
              width={80}
              height={80}
            />
          </Box>
        </AvatarWrapper>
      </form>
    </AuthLayout>
  );
}

export default ChangePassword;
