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

${mediaQuery.down.tablet} {
    padding-bottom: 20vh;
  }
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
padding-bottom: 20vh;
`;

export const EmailContainer = styled.div `
font-family: ${themeFonts.brandFont};
margin: auto;
display: flex;
font-weight: 900;
font-size: 5vh;
cursor: pointer;
`;

export const GitHubLogo = styled.img `
width: 5vh;
height: 5vh;
padding-right: 10px;
`


