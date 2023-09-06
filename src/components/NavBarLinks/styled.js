import styled from "styled-components";
import { Link } from "react-router-dom";
import {themeFonts, themeColors} from "../../common/theme"


export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
font-family: ${themeFonts.brandFont};
font-weight: 700;
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

`;
