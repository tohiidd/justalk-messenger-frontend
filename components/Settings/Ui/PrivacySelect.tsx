import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { accordionSelectStyles } from "../styles";

interface PrivacySelectProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function PrivacySelect({ value, setValue }: PrivacySelectProps) {
  const handleSelectChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <FormControl sx={accordionSelectStyles}>
      <Select
        value={value}
        onChange={handleSelectChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
      >
        <MenuItem value={"everybody"} sx={{ fontSize: ".75rem" }}>
          everybody
        </MenuItem>
        <MenuItem value={"nobody"} sx={{ fontSize: ".75rem" }}>
          nobody
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default PrivacySelect;
