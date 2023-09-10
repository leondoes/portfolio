import styled from "styled-components";
import { themeFonts, mediaQuery } from "../../common/theme";

export const PageContainer = styled.div `
font-family: ${themeFonts.brandFont};
display: flex;
flex-direction:column;
${mediaQuery.down.tablet} {
    padding: 0px 20px 0px 20px;
  }
`;

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



