import { SyntheticEvent } from "react";

export interface AccordionProps {
  expanded: string | false;
  handleChange: (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => void;
}
