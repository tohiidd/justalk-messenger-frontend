import { AddAPhoto, Check, Close } from "@mui/icons-material";
import { Backdrop, Box, Fade, IconButton, Modal, TextField, Typography } from "@mui/material";
import { modalWrapperStyles } from "components/Modals/styles";
import { avatarWrapperStyles, iconButtonStyles } from "components/Settings/styles";
import { AvatarWrapper } from "components/Ui/AsideMenu";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

function ProfileImage() {
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [openProfilePreview, setOpenProfilePreview] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => setOpenProfilePreview(false);

  const handleImagePreview = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files![0]);
    setOpenProfilePreview(true);
  };

  const handleImageUpload = () => {};

  return (
    <>
      <AvatarWrapper sx={avatarWrapperStyles}>
        <Box sx={{ position: "relative" }}>
          <Image
            src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
            alt="avatar"
            width={80}
            height={80}
          />
          <TextField type="file" sx={{ display: "none" }} inputRef={inputRef} onChange={handleImagePreview} />
          <IconButton
            sx={{ ...iconButtonStyles, position: "absolute", right: "0", bottom: "3px" }}
            onClick={() => inputRef.current?.click()}
          >
            <AddAPhoto sx={{ color: "common.grey200", fontSize: "1rem" }} />
          </IconButton>
        </Box>
      </AvatarWrapper>
      <Modal
        open={openProfilePreview}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProfilePreview}>
          <Box sx={modalWrapperStyles} p={1}>
            <Box position="relative" pb={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconButton onClick={handleClose}>
                  <Close sx={{ color: "common.black" }} />
                </IconButton>
                <Typography sx={{ fontWeight: 500, color: "common.black" }}>Image Preview</Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  padding: "10px 50px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    img: { aspectRatio: "1", position: "static !important" },
                  }}
                >
                  <Image src={selectedImage && URL?.createObjectURL(selectedImage)} alt="profile image preview" fill />
                  <Box sx={{ position: "absolute", top: "0", borderRadius: "50%", overflow: "hidden", zIndex: "1" }}>
                    <Image
                      src={selectedImage && URL?.createObjectURL(selectedImage)}
                      alt="profile image preview"
                      fill
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffffb3",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                  }}
                ></Box>
              </Box>
              <IconButton
                sx={{
                  backgroundColor: "success.main",
                  position: "absolute",
                  right: "5px",
                  bottom: "5px",
                  "&:hover": {
                    backgroundColor: "success.dark",
                  },
                }}
                onClick={handleImageUpload}
              >
                <Check sx={{ color: "#fff" }} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ProfileImage;
