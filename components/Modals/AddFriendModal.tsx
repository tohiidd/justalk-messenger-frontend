import { Dispatch, SetStateAction } from "react";
import { Box, Fade, Modal, Backdrop, Typography, IconButton, FormControl, FormLabel, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Input } from "components/Ui/Input/Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 480,
  width: "95%",
  bgcolor: "common.white",
  boxShadow: 24,
  borderRadius: "8px",
};

interface AddFriendModalProps {
  openAddContact: boolean;
  setOpenAddContact: Dispatch<SetStateAction<boolean>>;
}

export default function AddFriendModal({ openAddContact, setOpenAddContact }: AddFriendModalProps) {
  const handleClose = () => setOpenAddContact(false);
  return (
    <Modal
      open={openAddContact}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openAddContact}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 10px",
              borderBottom: "1px solid",
              borderBottomColor: "common.grey100",
            }}
          >
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "6px",
              padding: "18px",
              borderTop: "1px solid",
              borderTopColor: "common.grey100",
            }}
          >
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "success.main",
                fontSize: ".7rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              sx={{
                backgroundColor: "success.main",
                color: "white",
                fontSize: ".7rem",
                "&:hover": {
                  backgroundColor: "success.main",
                },
              }}
            >
              Invite
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
