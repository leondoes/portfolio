import styled from "styled-components";



export const PageContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #F7F6F7;
  background-color: #4e4449;

  display: grid;
  grid-template-columns:
    1fr
    min(145ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    background-color: #D1936F;
    grid-row: 1;
    grid-column: 1;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    background-color: #D1936F;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
  }
`;

export const ContentContainer = styled.div`
display: flex;
`;
