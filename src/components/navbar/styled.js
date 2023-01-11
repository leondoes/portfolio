import styled from "styled-components";
import { Link } from "react-router-dom";
import {themeColors, themeFonts} from "../../common/theme"
export const navBarHeight = 90;

export const NavBarStyled = styled.div`
  position: sticky;
  top: 0;
  background-color: ${themeColors.dark};
  flex-direction: column;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  border: 0;
  height: ${navBarHeight - 1 + "px"}; /* subtract 1 for border*/
  transition: height 0.4s ease 0s;
`;

export const NavBarLogo = styled(Link)`
display: flex;
font-family: ${themeFonts.brandFont};
font-weight: 900;
font-size: 80px;
padding-left: 69px;
color: ${themeColors.font};
&:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
`;