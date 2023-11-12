import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeFonts, themeColors, mediaQuery } from "../../common/theme";

export const HamburgerIcon = styled.div`
  position: absolute;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  transition: transform 0.3s ease-in-out;
  display: inline-block;
  top: 50px;
  right: 20px;
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 3;

  span {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 3px;
  }
`;

export const AnimatedLink = styled(Link)`
 font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  font-family: ${themeFonts.brandFont};
  user-select: none;
  font-weight: 700;
  font-size: 40px;
  color: ${themeColors.font};
  opacity: 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: fit-content;
  cursor: pointer;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: ${themeColors.brand};
    border-radius: 5px;
  }

  ${mediaQuery.down.tablet} {
    font-size: 30px;
  }
`;

export const HamburgerLinkContainer = styled.div`
  position: absolute;
  top: 90px; /* Adjusted position */
  right: 100px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0,0,0,0.8);
  border-radius: 0 0 8px 8px;
  width: 160px;
  opacity: ${(props) => (props.animateIn ? 1 : 0)};
  pointer-events: ${(props) => (props.animateIn ? 'auto' : 'none')}; /* Control click events */
  transition: transform 0.3s ease-out, opacity 0.3s ease-out, pointer-events 0s linear 0.3s;
  box-shadow: 0 8px 16px rgba(0,0,0,0.25);
  padding: 20px;
`;


