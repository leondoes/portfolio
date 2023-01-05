import React from "react";
import { StyledLink, LinkContainer } from "./styled";

const NavBarLinks = ({style}) => (
  <LinkContainer style={style}>
    <StyledLink to="/aboutme">About Me</StyledLink>
    <StyledLink to="/experience">Experience</StyledLink>
    <StyledLink to="/Contact">Contact</StyledLink>

  </LinkContainer>
);

export default NavBarLinks;
