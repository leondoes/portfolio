import styled from "styled-components";
import { themeFonts } from "../../common/theme";

export const PageContainer = styled.div `
font-family: ${themeFonts.brandFont};
display: flex;
flex-direction:column;
`;

export const Title = styled.div`
font-weight: 900;
font-size: 70px;
padding-bottom: 2vh;
padding-top: 10vh;
`;

export const Subtitle = styled.div `
font-weight: 700;
font-size: 50px;
padding-bottom: 2vh;
`

export const Copy = styled.div`
font-family: ${themeFonts.bodyFont};
display: flex;
flex-direction: column;
font-size: 24px;
gap: 20px;
padding-bottom: 2vh;
`;

export const EmailContainer = styled.div `
font-family: ${themeFonts.brandFont};
display: inline-flex;
font-weight: 900;
font-size: 50px;
cursor: pointer;
`;



