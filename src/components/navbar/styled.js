import styled from "styled-components";
import { Link } from "react-router-dom";

export const navBarHeight = 90;

export const NavBarStyled = styled.div`
  position: sticky;
  top: 0;
  flex-direction: column;
  z-index: 1;
  background: #242225;
  display: flex;
  justify-content: space-evenly;
  border: 0;
  height: ${navBarHeight - 1 + "px"}; /* subtract 1 for border*/
  transition: height 0.4s ease 0s;
`;

export const NavBarLogo = styled(Link)`
display: flex;
font-family: 'Work Sans';
font-weight: 900;
font-size: 80px;
padding-left: 69px;
color: #F1F4F3;
&:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
`