import styled from "styled-components";
import { themeColors, themeFonts, mediaQuery } from "../../common/theme";

export const PageContainer = styled.div `
font-family: ${themeFonts.brandFont};
display: flex;
flex-direction:column;
${mediaQuery.down.tablet} {
    padding: 0px 20px 0px 20px;
  }
`;

export const Title = styled.div`
  font-family: ${themeFonts.brandFont};
  font-weight: 900;
  font-size: 70px;
  padding-bottom: 20vh;
  padding-top: 20vh;
`;

export const Subtitle = styled.div`
  font-family: ${themeFonts.brandFont};
  font-weight: 700;
  font-size: 50px;
  padding-bottom: 10vh;
`;

export const Copy = styled.div`
  font-family: ${themeFonts.bodyFont};
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

export const Deck = styled.div`
  color: ${themeColors.font};
  font-family: ${themeFonts.bodyFont};  
`;

export const Card = styled.div`
  box-shadow: 0 10px 4px -4px #575a5e;
  border-radius: 10px;
  background-color: #222823;
  margin-bottom: 100px;
  margin-top: 100px;
  padding: 10px;
`;