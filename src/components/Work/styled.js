import styled from "styled-components";
import {
  themeColors,
  fontStyles,
  themeFonts,
  mediaQuery,
} from "../../common/theme";

export const PageContainer = styled.div`
  font-family: ${themeFonts.brandFont};
  display: flex;
  flex-direction: column;
  ${mediaQuery.down.tablet} {
    padding: 0px 20px 0px 20px;
  }
`;

export const Title = styled.div`
  ${fontStyles.Title};
`;

export const Subtitle = styled.div`
  ${fontStyles.Subtitle};
  scroll-margin-top: 150px;
`;

export const Copy = styled.div`
  ${fontStyles.Copy};
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;
`;

export const TopCopy = styled.div`
${fontStyles.Copy};
margin-top: -100px;
padding-bottom:20px;
`

export const Deck = styled.div`
  color: ${themeColors.font};
  font-family: ${themeFonts.bodyFont};
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  -moz-box-shadow: 0 0 15px #5d5f61;
  -webkit-box-shadow: 0 0 15px #5d5f61;
  box-shadow: 0 0 15x #5d5f61;
  border-radius: 10px;
  background-color: #070708;
  margin-bottom: 100px;
  margin-top: 100px;
  padding: 10px;
  scroll-margin:100px; //Needed for scroll links to adjust for navbar height
`;

export const SideBySide = styled.div`
display: grid;
    grid-template-columns: 0.4fr 1fr;
    grid-gap: 10px;
`;

export const Img = styled.img`
display: flex;
width: 300px;
`