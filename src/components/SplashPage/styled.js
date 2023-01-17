import styled from "styled-components";
import { Link } from "react-router-dom";
import {themeColors, themeFonts} from "../../common/theme"

export const LinkContainer = styled.div`
  font-family: ${themeFonts.brandFont};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20%;
  gap: 15px;
  letter-spacing: -15px;
  font-size: 150px;
  font-weight: 700;
`;

export const AboutLink = styled(Link)`
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

  animation: 0.3s ease-out 0.2s 1 slideInBottom;
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

  animation: 0.3s ease-out 1s 1 slideInBottom;
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

  animation: 0.3s ease-out 2s 1 slideInBottom;
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
`;

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  background-color: ${themeColors.dark};
  justify-content: space-between;
`;
