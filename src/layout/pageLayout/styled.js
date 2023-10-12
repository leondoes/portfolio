import styled from "styled-components";

export const PageContainer = styled.div`
color: blue;
  background-color: white;
  height: 100vh;
  

  //Doesn't move content on webpage when there's no scroll bar
  padding-left: calc(100vw - 100%);


  display: grid;
  grid-template-columns:
    1fr
    min(150ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    position:sticky;
    background-color: blue;
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    background-color: red;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
    
  }
`;

export const ContentContainer = styled.div`
display: flex;
margin: 30px 100px 30px 100px;


  @keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

animation: slideInFromBottom 0.8s ease-in-out;

`;
