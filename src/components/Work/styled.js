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
`;

export const ScrollDownLink = styled.div`
  ${fontStyles.Smallcaps};
  cursor: pointer;
`;

export const ScrollToTarget = styled.div``;

export const ScrollDownDesc = styled.div`
  font-family: ${themeFonts.bodyFont};
  color: ${themeColors.brand};
  font-size: 20px;
  font-weight: 400;
  margin-top: -17px;
  letter-spacing: 0px;
  font-variant: none;
`;

export const Copy = styled.div`
  ${fontStyles.Copy};
  padding-top: 10px;
  padding-bottom: 10px;
`;

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
  background-color: #070708;
  margin-bottom: 100px;
  margin-top: 100px;
  padding: 10px;
`;
