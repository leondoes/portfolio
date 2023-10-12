import styled from "styled-components";
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



