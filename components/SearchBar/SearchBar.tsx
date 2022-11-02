import { Search } from "@mui/icons-material";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

function SearchBar() {
  return (
    <FormControl sx={{ width: "100%", p: 3 }} variant="outlined">
      <OutlinedInput
        id="searchBar"
        sx={{
          height: "40px",
          backgroundColor: "common.grey100",
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          "& .MuiInputBase-input::placeholder": {
            fontSize: ".8rem",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <Search fontSize="small" color="primary" sx={{ cursor: "pointer" }} />
          </InputAdornment>
        }
        placeholder="Search here... "
      />
    </FormControl>
  );
}

export default SearchBar;
