import { Dispatch, SetStateAction } from "react";
import { Backdrop, Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import { endCallButtonStyles, iconButtonStyles, modalWrapperStyles } from "./styles";
import Image from "next/image";
import { calls } from "components/Calls/data";
import { CallEnd, MicOffOutlined, PersonAddAlt1Outlined, Sync, VolumeUpOutlined } from "@mui/icons-material";

interface VideoCallModalProps {
  openVideoCall: boolean;
  setOpenVideoCall: Dispatch<SetStateAction<boolean>>;
  callId: string;
}

function VideoCallModal({ openVideoCall, setOpenVideoCall, callId }: VideoCallModalProps) {
  const call = calls.find((call) => call.id === callId);
  const handleClose = () => setOpenVideoCall(false);

  return (
    <Modal
      open={openVideoCall}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openVideoCall}>
        <Box sx={{ ...modalWrapperStyles, borderRadius: "6px", overflow: "hidden" }}>
          <Box>
            <Box sx={{ position: "relative", height: "400px", img: { objectFit: "cover" } }}>
              <Image
                src={
                  call?.image ||
                  "https://res.cloudinary.com/dmgb7kvmn/image/upload/v1668606635/jusTalk/bgrkkvnjtl2mojgvnmmk.jpg"
                }
                alt="user profile"
                fill
              />
              <Box sx={{ position: "absolute", bottom: "-25px", width: "100%", textAlign: "center" }}>
                <Box sx={{ display: "flex", gap: "20px", textAlign: "center", mt: "20px", justifyContent: "center" }}>
                  <IconButton sx={iconButtonStyles}>
                    <MicOffOutlined sx={{ color: "common.grey200" }} fontSize="small" />
                  </IconButton>
                  <IconButton sx={iconButtonStyles}>
                    <VolumeUpOutlined sx={{ color: "common.grey200" }} fontSize="small" />
                  </IconButton>
                  <IconButton sx={iconButtonStyles}>
                    <PersonAddAlt1Outlined sx={{ color: "common.grey200" }} fontSize="small" />
                  </IconButton>
                  <IconButton sx={iconButtonStyles}>
                    <Sync sx={{ color: "common.grey200" }} fontSize="small" />
                  </IconButton>
                </Box>
                <Box mt={2}>
                  <IconButton sx={endCallButtonStyles}>
                    <CallEnd />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  padding: "35px 0 25px 0 ",
                  width: "100%",
                  backgroundColor: "success.main",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 500 }}>{call?.name || call?.username}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default VideoCallModal;
