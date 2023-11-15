import styled, { keyframes } from "styled-components";
import { themeFonts, themeColors, fontStyles,mediaQuery } from "../theme";

export const ToggleLink = styled.div`
  ${fontStyles.Smallcaps};
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ToggleDesc = styled.div`
  font-family: ${themeFonts.bodyFont};
  color: ${themeColors.brand};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
  font-weight: 400;
  margin-top: -17px;
  letter-spacing: 0px;
  font-variant: none;

  ${mediaQuery.down.tablet} {
    font-size:12px;
    margin-top: -12px;
  }
`;



const morphChevron = keyframes`
  0%, 100% {
    transform: scaleY(1) rotate(0deg);
  }
  50% {
    transform: scaleY(0) rotate(0deg);
  }
`;

const morphChevronDown = keyframes`
  0%, 100% {
    transform: scaleY(1) rotate(180deg);
  }
  50% {
    transform: scaleY(0) rotate(180deg);
  }
`;

export const StyledChevron = styled.svg`
  cursor: pointer;
  transition: transform 0.2s ease;
  transform-origin: center;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  animation: ${({ isOpen }) => isOpen ? morphChevronDown : morphChevron} 0.6s forwards;

  &:hover {
    transform: ${({ isOpen }) => 
      isOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1.1)'
    };
  }
`;
