import React from "react";
import { ToggleLink, ToggleDesc } from "./styled";

const ToggleSection = React.forwardRef(({ onClick, children, description }, ref) => {
  return (
    <ToggleLink ref={ref} onClick={onClick}>
      {children}
      <ToggleDesc>{description}</ToggleDesc>
    </ToggleLink>
  );
});

export default ToggleSection;
