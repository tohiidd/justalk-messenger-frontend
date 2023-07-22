import { useState, useRef, SyntheticEvent } from "react";

function useDisplayMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpenMenu(false);
  };
  return { openMenu, anchorRef, handleToggle, handleClose };
}

export default useDisplayMenu;
