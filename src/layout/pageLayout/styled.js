import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #f7f6f7;
  background-color: #4e4449;

  display: grid;
  grid-template-columns:
    1fr
    min(100ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    position:sticky;
    background-color: #d1936f;
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    background-color: #d1936f;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
    
  }
`;

export const ContentContainer = styled.div`
display: flex;
margin: 30px 100px 30px 100px;


`;
