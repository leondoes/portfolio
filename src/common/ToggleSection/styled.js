import styled from "styled-components";
import { themeFonts, themeColors, fontStyles,mediaQuery } from "../theme";

export const ToggleLink = styled.div`
  ${fontStyles.Smallcaps};
  cursor: pointer;
`;

export const ToggleDesc = styled.div`
  font-family: ${themeFonts.bodyFont};
  color: ${themeColors.brand};
  font-size: 20px;
  font-weight: 400;
  margin-top: -17px;
  letter-spacing: 0px;
  font-variant: none;

  ${mediaQuery.down.tablet} {
    font-size:12px;
    margin-top: -12px;
  }
`;
