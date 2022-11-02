import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanelTitle = styled((props: any) => <Typography {...props} />)(({ theme }) => ({
  flexGrow: "1",
  color: theme.palette.common.black,
  fontSize: "1.2rem",
  fontWeight: 500,
}));

export const AddContactBtn = styled(IconButton)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: "0",
  color: theme.palette.success.main,
  backgroundColor: theme.palette.common.lightGreen,
  fontSize: ".85rem",
  maxWidth: "30px",
  maxHeight: "30px",
  "& .add-icon": {
    fontSize: "1rem",
  },
  borderRadius: "3px",
  "&:hover": {
    backgroundColor: theme.palette.success.main,
    "& .add-icon": {
      color: "white",
    },
  },
}));

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            width: { xs: "100vw", md: "300px" },
            backgroundColor: "common.white",
            height: { xs: "calc(100vh - 60px )", md: "100vh" },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
