import styled from "styled-components";
import {themeColors, themeFonts} from "../../common/theme"

export const PageContainer = styled.div`
  font-family: ${themeFonts.bodyFont};
  color: ${themeColors.font};
  background-color: ${themeColors.dark};

  display: grid;
  grid-template-columns:
    1fr
    min(100ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    position:sticky;
    background-color: ${themeColors.dark};
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    background-color: ${themeColors.dark};
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
    
  }
`;

export const ContentContainer = styled.div`
display: flex;
margin: 30px 100px 30px 100px;


`;
