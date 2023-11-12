import React, { useState, useEffect } from "react";
import { HamburgerIcon, AnimatedLink, HamburgerLinkContainer } from "./styled";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);
  const [iconRotation, setIconRotation] = useState(90);

  const toggleHamburgerLinks = () => {
    setIconRotation(iconRotation === 0 ? 90 : 0); // Toggle between 0 and 90 degrees
    if (isMenuOpen) {
      setAnimateLinks(false);
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
      setTimeout(() => setAnimateLinks(true), 10);
    }
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setAnimateLinks(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <HamburgerIcon onClick={toggleHamburgerLinks} rotate={iconRotation}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <HamburgerLinkContainer animateIn={isMenuOpen && animateLinks}>
      <AnimatedLink to="/about" className={animateLinks ? "animate-in" : ""}>About</AnimatedLink>
        <AnimatedLink to="/work" className={animateLinks ? "animate-in" : ""}>Work</AnimatedLink>
        <AnimatedLink to="/contact" className={animateLinks ? "animate-in" : ""}>Contact</AnimatedLink>
      </HamburgerLinkContainer>
    </>
  );
};

export default HamburgerMenu;
