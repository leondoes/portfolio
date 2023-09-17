import styled from "styled-components";
import { Link } from "react-router-dom";
import {themeColors, themeFonts, mediaQuery} from "../../common/theme"

export const NavBarStyled = styled.div`
  position: sticky;
  top: 0;
  background-color: ${themeColors.dark};
  flex-direction: column;
  z-index: 1;
  justify-content: space-evenly;
  border: 0;
  height: 90px;
`;

export const NavBarLogo = styled(Link)`
display: inline-flex;
font-family: ${themeFonts.brandFont};
background-color:${themeColors.dark};
margin-top: -2px;
font-weight: 900;
font-size: 80px;
margin-left: 90px;
margin-bottom:10px;
letter-spacing: -4px;
color: ${themeColors.font};
&:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  ${mediaQuery.down.tablet} {
    margin-left: 5%;
  }
`;