import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Backdrop, Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import { callIconTextStyles, endCallButtonStyles, iconButtonStyles, modalWrapperStyles } from "./styles";
import { calls } from "components/Calls/data";
import { CallEnd, MicOffOutlined, PersonAddAlt1Outlined, VolumeUpOutlined } from "@mui/icons-material";

interface VoiceCallModalProps {
  openVoiceCall: boolean;
  setOpenVoiceCall: Dispatch<SetStateAction<boolean>>;
  callId: string;
}

function VoiceCallModal({ openVoiceCall, setOpenVoiceCall, callId }: VoiceCallModalProps) {
  const call = calls.find((call) => call.id === callId);
  const handleClose = () => setOpenVoiceCall(false);

  return (
    <Modal
      open={openVoiceCall}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openVoiceCall}>
        <Box sx={modalWrapperStyles}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              pt: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                img: {
                  borderRadius: "50%",
                  border: "4px solid",
                  borderColor: (theme) => (theme.palette.mode === "light" ? "#fafafa" : "#262626"),
                },
              }}
            >
              <Image
                src={
                  call?.image ||
                  "https://res.cloudinary.com/dmgb7kvmn/image/upload/v1668606635/jusTalk/bgrkkvnjtl2mojgvnmmk.jpg"
                }
                alt="user pic"
                width={90}
                height={90}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px", textAlign: "center", mt: "20px" }}>
              <Box>
                <IconButton sx={iconButtonStyles}>
                  <MicOffOutlined sx={{ color: "common.grey200" }} fontSize="small" />
                </IconButton>
                <Typography sx={callIconTextStyles}>MUTE</Typography>
              </Box>
              <Box>
                <IconButton sx={iconButtonStyles}>
                  <VolumeUpOutlined sx={{ color: "common.grey200" }} fontSize="small" />
                </IconButton>
                <Typography sx={callIconTextStyles}>SPEAKER</Typography>
              </Box>
              <Box>
                <IconButton sx={iconButtonStyles}>
                  <PersonAddAlt1Outlined sx={{ color: "common.grey200" }} fontSize="small" />
                </IconButton>
                <Typography sx={callIconTextStyles}>ADD NEW</Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <IconButton sx={endCallButtonStyles}>
                <CallEnd />
              </IconButton>
            </Box>
            <Box
              sx={{
                padding: "35px 0 25px 0 ",
                width: "100%",
                backgroundColor: "common.lightGreen",
                textAlign: "center",
                marginTop: "-25px",
              }}
            >
              <Typography sx={{ color: "common.black", fontWeight: 500 }}>{call?.name || call?.username}</Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default VoiceCallModal;
