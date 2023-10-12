import React from "react";
import { StyledLink, LinkContainer } from "./styled";

const NavBarLinks = ({style}) => (
  <LinkContainer style={style}>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/work">Work</StyledLink>
    <StyledLink to="/Contact">Contact</StyledLink>

  </LinkContainer>
);

export default NavBarLinks;
