import { useState, useRef, SyntheticEvent } from "react";
import Image from "next/image";
import { AddAPhoto, Circle, Edit, ExpandMore } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { TabPanelTitle } from "components/Ui/TabPanel";
import { AvatarWrapper, DarkTooltip } from "components/Ui/AsideMenu";
import { headerStyles } from "../Profile/styles";
import { avatarWrapperStyles, iconButtonStyles, statusTitleStyles } from "./styles";
import useDisplayMenu from "hooks/useDisplayMenu";
import StatusDropdown from "./StatusDropdown";
import PersonalInfo from "./Accordions/PersonalInfo";
import Privacy from "./Accordions/Privacy";
import Security from "./Accordions/Security";
import Help from "./Accordions/Help";
import Container from "components/Ui/Container";

export default function Profile() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const bgInputRef = useRef<HTMLInputElement>(null);
  const { openMenu, anchorRef, handleToggle, handleClose } = useDisplayMenu();

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "160px",
          img: { objectFit: "cover" },
        }}
      >
        <Image
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667480959/jusTalk/mmvx1frutemx1oefesta.jpg"
          alt="profile background"
          fill
        />
        <Box sx={headerStyles}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TabPanelTitle sx={{ color: "white", zIndex: "1" }}>Settings</TabPanelTitle>
            <TextField type="file" sx={{ display: "none" }} ref={bgInputRef} />
            <DarkTooltip title="change background" placement="bottom">
              <IconButton sx={iconButtonStyles}>
                <Edit sx={{ color: "common.grey200", fontSize: "1rem" }} />
              </IconButton>
            </DarkTooltip>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pb: "20px" }}>
        <AvatarWrapper sx={avatarWrapperStyles}>
          <Box sx={{ position: "relative" }}>
            <Image
              src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667140257/jusTalk/krdtwxpkf3baznlehems.jpg"
              alt="avatar"
              width={80}
              height={80}
            />
            <IconButton sx={{ ...iconButtonStyles, position: "absolute", right: "0", bottom: "3px" }}>
              <AddAPhoto sx={{ color: "common.grey200", fontSize: "1rem" }} />
            </IconButton>
          </Box>
        </AvatarWrapper>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
            }}
            variant="subtitle1"
            color="primary"
          >
            Kathryn Swarey
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="subtitle1" sx={statusTitleStyles} ref={anchorRef} onClick={handleToggle}>
              <Circle sx={{ fontSize: ".65rem", color: "common.yellow", mr: "4px" }} />
              Away
              <ExpandMore fontSize="small" />
            </Typography>
          </Box>
        </Box>
      </Box>
      <StatusDropdown openMenu={openMenu} handleClose={handleClose} anchorRef={anchorRef!} />

      <Container sx={{ height: { xs: "calc(100vh - 345px)", md: "calc(100vh - 300px)" } }}>
        <PersonalInfo expanded={expanded} handleChange={handleChange} />
        <Privacy expanded={expanded} handleChange={handleChange} />
        <Security expanded={expanded} handleChange={handleChange} />
        <Help expanded={expanded} handleChange={handleChange} />
      </Container>
    </>
  );
}
