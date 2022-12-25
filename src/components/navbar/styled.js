import styled from "styled-components";

export const navBarHeight = 90;

export const NavBarStyled = styled.div`
  position: sticky;
  top: 0;
  flex-direction: column;
  z-index: 1;
  background: #D1936F;
  display: flex;
  justify-content: space-evenly;
  color: #F7F6F7;
  border: 0;
  padding-left: 2%;
  height: ${navBarHeight - 1 + "px"}; /* subtract 1 for border*/
  transition: height 0.4s ease 0s;
`;

export const NavBarLogo = styled.div`
font-family: 'Work Sans';
font-weight: 900;
font-size: 80px;
`