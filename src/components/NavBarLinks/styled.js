import styled from "styled-components";
import { Link } from "react-router-dom";


export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
font-family: "Work Sans";
font-weight: 700;
color: #F1F4F3;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: #FF311B;
  }

`;
