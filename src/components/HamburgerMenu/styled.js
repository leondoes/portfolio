import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeFonts, themeColors, mediaQuery } from "../../common/theme";

export const HamburgerIcon = styled.div`
  position: absolute;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  transition: transform 0.3s ease-in-out;
  display: inline-block;
  background-color: rgba(36, 43, 42, 0.5);
  padding: 6px;
  border-radius: 10px;
  top: 35px;
  right: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 3;

  span {
    height: 5px;
    width: 100%;
    background-color: ${themeColors.font};
    border-radius: 3px;
  }
`;

export const AnimatedLink = styled(Link)`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 15px;
  font-family: ${themeFonts.brandFont};
  user-select: none;
  font-weight: 700;
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
  right: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(36, 43, 42, 0.5);
  border-radius: 8px;
  width: 160px;
  height: 170px;
  opacity: ${(props) => (props.animateIn ? 1 : 0)};
  pointer-events: ${(props) =>
    props.animateIn ? "auto" : "none"}; /* Control click events */
  transition: transform 0.3s ease-out, opacity 0.3s ease-out,
    pointer-events 0s linear 0.3s;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  padding: 10px;

  ${mediaQuery.down.tablet} {
    width: 120px;
    height: 130px;
  }
`;
