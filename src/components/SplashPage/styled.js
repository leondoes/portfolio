import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  themeColors,
  themeFonts,
  mediaQuery,
  fontStyles,
} from "../../common/theme";

export const LinkContainer = styled.div`
  font-family: ${themeFonts.brandFont};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20%;
  gap: 15px;
  letter-spacing: -15px;
  font-size: 150px;
  font-weight: 700;
  z-index: 2;

  ${mediaQuery.down.tablet} {
    padding-left: 10%;
    letter-spacing: -7px;
    font-size: 10vh;
    background-color: ${themeColors.dark};
  }

  ${mediaQuery.up.desktop} {
    padding-left: 50%;
  }
`;

export const AboutLink = styled(Link)`
  width: 400px;
  color: ${themeColors.font};
  transition: padding-left 0.2s;
  @keyframes slideInBottom {
    0% {
      transform: translateY(25vh);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: 0.4s ease-out 0.2s 1 slideInBottom;
  animation-fill-mode: forwards;
  visibility: hidden;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    padding-left: 20px;
    color: ${themeColors.brand};
  }
`;

export const WorkLink = styled(Link)`
  color: ${themeColors.font};
  transition: padding-left 0.2s;
  @keyframes slideInBottom {
    0% {
      transform: translateY(5vh);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: 0.4s ease-out 0.7s 1 slideInBottom;
  animation-fill-mode: forwards;
  visibility: hidden;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    padding-left: 20px;
    color: ${themeColors.brand};
  }
`;
export const ContactLink = styled(Link)`
  color: ${themeColors.font};
  transition: padding-left 0.2s;
  @keyframes slideInBottom {
    0% {
      transform: translateY(2vh);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: 0.4s ease-out 1.3s 1 slideInBottom;
  animation-fill-mode: forwards;
  visibility: hidden;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    padding-left: 20px;
    color: ${themeColors.brand};
    padding-right: 90px;
  }
`;

export const Mugshot = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  z-index: 1;

 ${mediaQuery.up.tablet} {
    justify-self: flex-end;
  }}

  ${mediaQuery.down.tablet} {
    display: none;
  }

  @keyframes zoomIn {
    0% {
        transform: scale(1.2);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

animation: zoomIn 1s ease-in-out forwards;


  
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
    visibility: visible;
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Indicator = styled.div`
  ${fontStyles.Subtitle};
  font-weight: 400;
  pointer-events: none;
  font-size: 20px;
  color: white;
  padding: 0px 10px;
  transition: padding-bottom 0.2s;
  opacity: 0;
  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  ${mediaQuery.down.tablet} {
    font-size: 15px;
  }

  animation: ${bounceAnimation} 2s infinite,
    ${fadeInAnimation} 1s ease-in-out 0.3s 1 normal forwards;
`;

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: ${themeColors.dark};
  height: 100vh;
  overflow: hidden;
`;
