import React, { useState } from "react";
import { HamburgerIcon, HamburgerLink, HamburgerLinkContainer } from "./styled";

const HamburgerMenu = () => {
  const [showHamburgerLinks, setShowHamburgerLinks] = useState(false);

  const toggleHamburgerLinks = () => {
    setShowHamburgerLinks(!showHamburgerLinks);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleHamburgerLinks} />
      {showHamburgerLinks && (
        <HamburgerLinkContainer>
          <HamburgerLink to="/about">About</HamburgerLink>
          <HamburgerLink to="/work">Work</HamburgerLink>
          <HamburgerLink to="/Contact">Contact</HamburgerLink>
        </HamburgerLinkContainer>
      )}
    </>
  );
};

export default HamburgerMenu;
