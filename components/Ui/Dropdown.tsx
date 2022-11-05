import { PropsWithChildren, SyntheticEvent } from "react";
import { ClickAwayListener, Grow, MenuList, Paper, Popper } from "@mui/material";

interface DropdownProps extends PropsWithChildren {
  openMenu: boolean;
  handleClose: (event: Event | SyntheticEvent) => void;
  anchor: any;
}

function Dropdown({ openMenu, handleClose, anchor, children }: DropdownProps) {
  return (
    <Popper
      open={openMenu}
      anchorEl={anchor}
      placement="bottom-start"
      transition
      disablePortal
      sx={{
        backgroundColor: "common.white",
        zIndex: "11",
        boxShadow: "0 2px 4px rgb(15 34 58 / 12%)",
        borderRadius: "2px",
      }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                sx={{
                  zIndex: "111",
                  position: "relative",
                  color: (theme) => (theme.palette.mode === "light" ? "#212529" : "#8f9198"),
                  "& .MuiListItemText-root": { span: { fontSize: "15px" } },
                  "& .MuiListItemIcon-root": {
                    justifyContent: "end",
                    svg: {
                      color: (theme) => (theme.palette.mode === "light" ? "#797c8c" : "#8f9198"),
                      fontSize: "16px",
                    },
                  },
                }}
              >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default Dropdown;
