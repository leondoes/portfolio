import styled from "styled-components";



export const PageContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  display: grid;
  color: #F7F6F7;
  background-color: #4e4449;
  font-size: 24px;

  display: grid;
  grid-template-columns:
    1fr
    min(145ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of enterprise bar */
  &:before {
    content: "";
    background-color: #313131;
    grid-row: 1;
    grid-column: 1;
  }
  /* Colouring of RIGHT side of enterprise bar */
  &:after {
    content: "";
    background-color: #313131;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
  }
`;

export const ContentContainer = styled.div`
display: flex;
`;
