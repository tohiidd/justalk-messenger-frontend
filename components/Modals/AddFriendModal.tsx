import { Dispatch, SetStateAction } from "react";
import { Box, Fade, Modal, Backdrop, Typography, IconButton, FormControl, FormLabel } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Input } from "components/Ui/Inputs";
import { OutlineButton, SuccessButton } from "components/Ui/Buttons";
import { buttonsWrapperStyles, modalHeaderStyles, modalWrapperStyles } from "./styles";

interface AddFriendModalProps {
  openAddFriend: boolean;
  setOpenAddFriend: Dispatch<SetStateAction<boolean>>;
}

export default function AddFriendModal({ openAddFriend, setOpenAddFriend }: AddFriendModalProps) {
  const handleClose = () => setOpenAddFriend(false);
  return (
    <Modal
      open={openAddFriend}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openAddFriend}>
        <Box sx={modalWrapperStyles}>
          <Box sx={modalHeaderStyles}>
            <Typography component="h2" color="common.black">
              Add Contact
            </Typography>
            <IconButton onClick={handleClose}>
              <Close sx={{ color: "common.black" }} />
            </IconButton>
          </Box>
          <Box p={3}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ fontSize: ".9rem", fontWeight: "500", color: "common.black", mb: 1 }}>Email</FormLabel>
              <Input placeholder="Enter Email" />
            </FormControl>
            <FormControl sx={{ width: "100%", mt: 2 }}>
              <FormLabel sx={{ fontSize: ".9rem", fontWeight: "500", color: "common.black", mb: 1 }}>Name</FormLabel>
              <Input placeholder="Enter Name" />
            </FormControl>
            <FormControl sx={{ width: "100%", mt: 2 }}>
              <FormLabel sx={{ fontSize: ".9rem", fontWeight: "500", color: "common.black", mb: 1 }}>
                Invitation Message
              </FormLabel>
              <Input multiline rows={3} maxRows={3} sx={{ height: "unset" }} placeholder="Enter Message" />
            </FormControl>
          </Box>
          <Box sx={buttonsWrapperStyles}>
            <OutlineButton onClick={handleClose}>Close</OutlineButton>
            <SuccessButton>Invite</SuccessButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
