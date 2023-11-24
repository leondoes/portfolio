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

  a {
    text-decoration: none; // Removes the underline
    color: inherit; // Ensures the link uses the Subtitle color

    &:hover {
    }
  }
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
  margin-bottom: 10vh;
`;

export const Drawer = styled.div`
  overflow: hidden;
  transition: max-height 0.8s ease-in-out;
  max-height: ${(props) => (props.isOpen ? "100%" : "0")};
`;

export const Card = styled.div`
  -moz-box-shadow: 0 0 15px #5d5f61;
  -webkit-box-shadow: 0 0 15px #5d5f61;
  box-shadow: 0 0 15x #5d5f61;
  border-radius: 18px;
  background-color: #070708;
  margin-bottom: 100px;
  margin-top: 10px;
  padding: 10px;
  scroll-margin: 100px;
  margin-left:1px;
  margin-right:1px;
  overflow: hidden;
`;

export const SideBySide = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 10px;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const DemoContainer = styled.div`
  display: flex;
  cursor: pointer;
  max-width: 300px;
`

export const GitHubContainer = styled.div`
  font-family: ${themeFonts.brandFont};
  display: flex;
  font-weight: 600;
  font-size: 5vh;
  cursor: pointer;
  margin-right: 59%;
`;

export const GitHubLogo = styled.img`
  width: 5vh;
  height: 5vh;
  padding-right: 10px;
`;

export const gutHubPages = styled.img`
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  font-family: ${themeFonts.bodyFont};
  color: ${themeColors.font};
  cursor: pointer;
  position: relative;
  text-align: center;
  outline: none;
  margin-top: 20px;
  margin-bottom: -20px;
  font-size: 18px;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, rgba(0,0,0,0), rgba(93,95,97,1), rgba(0,0,0,0));
  }

  &:hover {
    background: linear-gradient(to left, rgba(0,0,0,0), #242525ff, rgba(0,0,0,0));
  }

  &:active {
    box-shadow: inset 0 3px 5px rgba(0,0,0,0.2);
  }
`;
