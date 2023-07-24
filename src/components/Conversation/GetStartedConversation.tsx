import {Chat} from "@mui/icons-material";
import {Box, Typography} from "@mui/material";
import {SuccessButton} from "components/Ui/Buttons";

function GetStartedConversation() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "8px",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "96px",
          height: "96px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "common.lightGreen",
          borderRadius: "50%",
          mb: "16px",
        }}
      >
        <Chat sx={{color: "success.main", fontSize: "4rem"}} />
      </Box>
      <Box sx={{width: "340px"}}>
        <Typography color="common.black" variant="h4" fontSize={"1.2rem"} fontWeight={500} mb={1}>
          Welcome to JusTalk Messenger
        </Typography>
        <Typography
          sx={{color: (theme) => (theme.palette.mode === "light" ? "#797c8c" : "#8f9198"), fontSize: ".9rem"}}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. cum sociis natoque
          penatibus et
        </Typography>
      </Box>
      <Box mt={2}>
        <SuccessButton sx={{textTransform: "capitalize", padding: "6px 24px", fontSize: ".94rem", fontWeight: 400}}>
          Get Started
        </SuccessButton>
      </Box>
    </Box>
  );
}

export default GetStartedConversation;
