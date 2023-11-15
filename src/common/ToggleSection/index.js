import React, { forwardRef } from 'react';
import { ToggleLink, ToggleDesc, StyledChevron } from "./styled";

const ChevronIcon = ({ isOpen }) => (
  <StyledChevron
    isOpen={isOpen}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </StyledChevron>
);

const ToggleSection = forwardRef(({ isOpen, onClick, children, description }, ref) => {
 
  return (
    <ToggleLink ref={ref} onClick={onClick}>
      {children}
      <ChevronIcon isOpen={isOpen} />
      <ToggleDesc>{description}</ToggleDesc>
    </ToggleLink>
  );
});

export default ToggleSection;