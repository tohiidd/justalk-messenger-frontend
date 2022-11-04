import { useState, Dispatch, SetStateAction } from "react";
import {
  Fade,
  Modal,
  Box,
  Backdrop,
  Typography,
  IconButton,
  FormControl,
  FormLabel,
  Collapse,
  Button,
  ListItem,
  List,
  Checkbox,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { modalHeaderStyles, modalWrapperStyles, buttonsWrapperStyles } from "./styles";
import { Close } from "@mui/icons-material";
import { Input } from "components/Ui/Inputs";
import { OutlineButton, SuccessButton } from "components/Ui/Buttons";

interface AddGroupModalProps {
  openAddGroup: boolean;
  setOpenAddGroup: Dispatch<SetStateAction<boolean>>;
}
function CreateGroupModal({ openAddGroup, setOpenAddGroup }: AddGroupModalProps) {
  const [openFriendsList, setOpenFriendsList] = useState(false);
  const [checked, setChecked] = useState([1]);

  const handleClose = () => setOpenAddGroup(false);
  const handleDisplayFriendsList = () => setOpenFriendsList((prev) => !prev);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Modal
      open={openAddGroup}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openAddGroup}>
        <Box sx={modalWrapperStyles}>
          <Box sx={modalHeaderStyles}>
            <Typography component="h2" color="common.black">
              Create New Group
            </Typography>
            <IconButton onClick={handleClose}>
              <Close sx={{ color: "common.black" }} />
            </IconButton>
          </Box>
          <Box p={3}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel sx={{ fontSize: ".9rem", fontWeight: "500", color: "common.black", mb: 1 }}>
                Group Name
              </FormLabel>
              <Input placeholder="Enter Group Name" />
            </FormControl>
            <FormControl sx={{ width: "100%", mt: 2 }}>
              <FormLabel sx={{ fontSize: ".9rem", fontWeight: "500", color: "common.black", mb: 1 }}>
                Group Members
              </FormLabel>
              <Button
                sx={{ backgroundColor: "common.grey100", color: "common.black " }}
                onClick={handleDisplayFriendsList}
              >
                Select Members
              </Button>
              <Collapse in={openFriendsList}>
                <List dense sx={{ width: "100%", bgcolor: "background.paper", maxHeight: "168px", overflow: "auto" }}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                      <ListItem key={value} disablePadding>
                        <ListItemButton sx={{ py: 0 }} onClick={handleToggle(value)}>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              size="small"
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} secondary={`Line item ${value + 1}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </FormControl>
            <FormControl sx={{ width: "100%", mt: 2 }}>
              <FormLabel sx={{ fontSize: ".9rem", fontWeight: "500", color: "common.black", mb: 1 }}>
                Description
              </FormLabel>
              <Input multiline rows={3} maxRows={3} sx={{ height: "unset" }} placeholder="Enter Description" />
            </FormControl>
          </Box>
          <Box sx={buttonsWrapperStyles}>
            <OutlineButton onClick={handleClose}>Close</OutlineButton>
            <SuccessButton>Create Group</SuccessButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CreateGroupModal;
