import styled from "styled-components";
import {Link} from "react-router-dom"
import { themeFonts, mediaQuery, fontStyles } from "../../common/theme";

export const PageContainer = styled.div `
font-family: ${themeFonts.brandFont};
display: flex;
flex-direction:column;
${mediaQuery.down.tablet} {
    padding: 0px 20px 0px 20px;
  }
`;

export const Title = styled.div`
${fontStyles.Title};
`;

export const Subtitle = styled.div `
${fontStyles.Subtitle};
`

export const Copy = styled.div`
${fontStyles.Copy};
`;

export const EmailVerified = styled(Link) `
`;

export const EmailContainer = styled.div`
font-family: ${themeFonts.brandFont};
display: flex;
font-weight: 900;
font-size: 5vh;
height: 80px;
justify-content: center;
align-items: center;
`;
export const GitHubContainer = styled.div`
font-family: ${themeFonts.brandFont};
margin: auto;
display: flex;
font-weight: 900;
font-size: 5vh;
cursor: pointer;
`

export const GitHubLogo = styled.img `
width: 5vh;
height: 5vh;
padding-right: 10px;
`


