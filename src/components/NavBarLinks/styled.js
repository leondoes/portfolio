import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../common/theme";

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #f7f6f7;

  &:hover {
    transition: color 1s;
    color: #4E4449;
  }

  @media ${device.mobileS} {
      display: none;
    }
`;
