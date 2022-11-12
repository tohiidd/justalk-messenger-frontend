import { useState, ChangeEvent, useRef, useEffect } from "react";
import { Check, Edit, ExpandMore, Person } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Box, FormControl, FormLabel, TextField, Typography } from "@mui/material";
import { SettingAccordion } from "components/Ui/Accordions";
import { AccordionProps } from "../types";
import { infoInputStyles, infoLabelStyles } from "../styles";
import { AddContactBtn } from "components/Ui/TabPanel";

function PersonalInfo({ expanded, handleChange }: AccordionProps) {
  const [inputs, setInputs] = useState({
    name: "Kathryn Swarey",
    username: "kathryn",
    email: "admin@themesbrand.com",
    location: "California, USA",
  });
  const [editMode, setEditMode] = useState(false);

  const nameInputRef = useRef<HTMLDivElement>(null);

  const handleInputValues = (event: ChangeEvent<any>) => {
    const name = event.target.name;
    setInputs((prev) => ({ ...prev, [name]: event.target.value }));
  };

  useEffect(() => {
    if (editMode) {
      nameInputRef?.current?.focus();
    }
  }, [editMode]);
  return (
    <SettingAccordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1bh-content" id="panel1bh-header">
        <Person sx={{ fontSize: "1.1rem" }} />
        <Typography className="summary-title">Personal info</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="form" sx={{ position: "relative" }}>
          <AddContactBtn
            sx={{ position: "absolute", right: "0", top: "0", zIndex: "1", svg: { fontSize: ".8rem !important" } }}
            onClick={() => setEditMode((prev) => !prev)}
          >
            {editMode ? <Check className="add-icon" /> : <Edit className="add-icon" />}
          </AddContactBtn>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel sx={infoLabelStyles}>Name</FormLabel>
            <TextField
              variant="standard"
              id="name"
              value={inputs.name}
              sx={infoInputStyles}
              onChange={handleInputValues}
              name="name"
              className={!editMode ? "standardMode" : ""}
              inputProps={{
                readOnly: !editMode,
              }}
              inputRef={nameInputRef}
            />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <FormLabel sx={infoLabelStyles}>Username</FormLabel>
            <TextField
              variant="standard"
              id="username"
              value={inputs.username}
              sx={infoInputStyles}
              onChange={handleInputValues}
              name="username"
              className={!editMode ? "standardMode" : ""}
              inputProps={{
                readOnly: !editMode,
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <FormLabel sx={infoLabelStyles}>Email</FormLabel>
            <TextField
              variant="standard"
              id="email"
              value={inputs.email}
              sx={infoInputStyles}
              onChange={handleInputValues}
              name="email"
              className={!editMode ? "standardMode" : ""}
              inputProps={{
                readOnly: !editMode,
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <FormLabel sx={infoLabelStyles}>Location</FormLabel>
            <TextField
              variant="standard"
              id="location"
              value={inputs.location}
              sx={infoInputStyles}
              onChange={handleInputValues}
              name="location"
              className={!editMode ? "standardMode" : ""}
              inputProps={{
                readOnly: !editMode,
              }}
            />
          </FormControl>
        </Box>
      </AccordionDetails>
    </SettingAccordion>
  );
}

export default PersonalInfo;
