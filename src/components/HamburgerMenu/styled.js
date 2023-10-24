import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeFonts, themeColors, mediaQuery } from "../../common/theme";

export const HamburgerIcon = styled.div`
  position: absolute;
  top: 20px; /* Adjust this value as needed */
  right: 20px; /* Adjust this value as needed */
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const HamburgerLink = styled(Link)`
  font-family: ${themeFonts.brandFont};
  font-weight: 700;
  font-size: 40px;
  color: ${themeColors.font};

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: ${themeColors.brand};
  }

  ${mediaQuery.down.tablet} {
    font-size: 30px;
  }
`;

export const HamburgerLinkContainer = styled.div`
  position: absolute;
  top: 20px; /* Adjust this value as needed */
  right: 200px; /* Adjust this value to position it to the left */
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 50px;
  height: auto; /* Use 'auto' to adapt to the content height */
  color: white;
`;
