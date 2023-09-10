import styled from "styled-components";
import { themeColors, themeFonts, mediaQuery } from "../../common/theme";


export const Title = styled.div`
font-weight: 900;
font-size: 70px;
padding-bottom: 30vh;
padding-top: 20vh;
`;

export const Subtitle = styled.div `
font-weight: 700;
font-size: 50px;
padding-bottom: 10vh;
`

export const Copy = styled.div`
font-family: ${themeFonts.bodyFont};
display: flex;
flex-direction: column;
font-size: 24px;
gap: 20px;
`;

export const Deck = styled.div`
  font-family: ${themeFonts.brandFont};
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  box-shadow: 0 10px 4px -4px #575a5e;
  padding: 10px;
  border-radius: 10px;
  background-color: #222823;
  margin-bottom: 100px;
  margin-top: 100px;

  ${mediaQuery.down.tablet} {

  }


`;
