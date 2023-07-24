import Image from "next/image";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {
  ArrowBackIos,
  Call,
  DeleteOutline,
  Info,
  MicOff,
  MoreVert,
  PersonOutline,
  Search,
  VideocamOutlined,
} from "@mui/icons-material";
import {Box, IconButton, ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import VoiceCallModal from "components/Modals/VoiceCallModal";
import VideoCallModal from "components/Modals/VideoCallModal";
import Dropdown from "components/Ui/Dropdown";
import useDisplayMenu from "hooks/useDisplayMenu";
import {useRouter} from "next/navigation";

function ConversationTopBar() {
  const [openVoiceCall, setOpenVoiceCall] = useState(false);
  const [openVideoCall, setOpenVideoCall] = useState(false);

  const {openMenu, anchorRef, handleToggle, handleClose} = useDisplayMenu();

  const {push} = useRouter();

  const theme = useTheme();

  const handleToggleModal = (type: string) => () => {
    if (type === "voice") {
      setOpenVoiceCall((prev) => !prev);
    } else {
      setOpenVideoCall((prev) => !prev);
    }
  };
  function handleBackClick() {
    push("/");
  }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          backgroundColor: "common.softWhite",
          backdropFilter: {xs: "blur(20px)", md: "blur(7px)"},
          borderBottom: "1px solid ",
          borderBottomColor: theme.palette.mode === "light" ? "#eaeaf1" : "#333",
          padding: "25px",
          zIndex: 99999,
        }}
      >
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <Box>
            <Box sx={{display: "flex", alignItems: "center", gap: "10px", color: "common.black"}}>
              <IconButton sx={{display: {md: "none"}}} onClick={handleBackClick}>
                <ArrowBackIos sx={{color: "common.grey200"}} />
              </IconButton>
              <Box sx={{display: "flex", alignItems: "center", img: {borderRadius: "50%"}}}>
                <Image
                  src={"https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667375697/jusTalk/zewq69s3crcubsawfsa9.jpg"}
                  alt="user pic"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography component="h6" color="common.black" fontWeight={500} fontSize={"18px"}>
                  Marguerite Campbell
                </Typography>
                <Typography color="common.black" fontSize={"13px"} fontWeight={300}>
                  active
                </Typography>
              </Box>
            </Box>
            {/* {!image && <FriendAvatar sx={{ bgcolor: avatarColor }}>{avatarText}</FriendAvatar>} */}
          </Box>
          <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
            <IconButton>
              <Search sx={{color: "common.grey200"}} />
            </IconButton>
            <IconButton sx={{display: {xs: "none", md: "block"}}} onClick={handleToggleModal("voice")}>
              <Call sx={{color: "common.grey200"}} />
            </IconButton>
            <IconButton sx={{display: {xs: "none", md: "block"}}} onClick={handleToggleModal("video")}>
              <VideocamOutlined sx={{color: "common.grey200"}} />
            </IconButton>
            <IconButton sx={{display: {xs: "none", md: "block"}}}>
              <Info sx={{color: "common.grey200"}} />
            </IconButton>
            <IconButton ref={anchorRef} onClick={handleToggle}>
              <MoreVert sx={{color: "common.grey200"}} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {openVoiceCall && (
        <VoiceCallModal openVoiceCall={openVoiceCall} setOpenVoiceCall={setOpenVoiceCall} callId={"2"} />
      )}
      {openVideoCall && (
        <VideoCallModal openVideoCall={openVideoCall} setOpenVideoCall={setOpenVideoCall} callId={"4"} />
      )}
      <Dropdown openMenu={openMenu} handleClose={handleClose} anchor={anchorRef.current!}>
        <MenuItem sx={{display: {md: "none"}}}>
          <ListItemText>View Profile</ListItemText>
          <ListItemIcon>
            <PersonOutline />
          </ListItemIcon>
        </MenuItem>
        <MenuItem sx={{display: {md: "none"}}}>
          <ListItemText>Voice Call</ListItemText>
          <ListItemIcon>
            <Call />
          </ListItemIcon>
        </MenuItem>
        <MenuItem sx={{display: {md: "none"}}}>
          <ListItemText>Video Call</ListItemText>
          <ListItemIcon>
            <VideocamOutlined />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemText>Muted</ListItemText>
          <ListItemIcon>
            <MicOff />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemText>Delete</ListItemText>
          <ListItemIcon>
            <DeleteOutline />
          </ListItemIcon>
        </MenuItem>
      </Dropdown>
    </>
  );
}

export default ConversationTopBar;
