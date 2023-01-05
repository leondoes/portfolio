import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkContainer = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 90px;
  gap: 15px;
  letter-spacing: -4px;
  font-family: "Work Sans";
  font-size: 90px;
  font-weight: 700;
`;

export const AboutLink = styled(Link)`
  background-color: red;
  @keyframes slideInBottom {
    0% {
      transform: translateY(25vh);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: 0.3s ease-out 0.2s 1 slideInBottom;
  animation-fill-mode: forwards;
  visibility: hidden;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #f7f6f7;

  &:hover {
    transition: padding-left 0.2s;
    padding-left: 20px;
    color: #4e4449;
  }
`;

export const WorkLink = styled(Link)`
  background-color: red;

  @keyframes slideInBottom {
    0% {
      transform: translateY(5vh);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: 0.3s ease-out 1s 1 slideInBottom;
  animation-fill-mode: forwards;
  visibility: hidden;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #f7f6f7;

  &:hover {
    transition: padding-left 0.2s;
    padding-left: 20px;
    color: #4e4449;
  }
`;
export const ContactLink = styled(Link)`
  background-color: red;
  @keyframes slideInBottom {
    0% {
      transform: translateY(2vh);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: 0.3s ease-out 2s 1 slideInBottom;
  animation-fill-mode: forwards;
  visibility: hidden;

  &:focus,
  &:visited,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #f7f6f7;

  &:hover {
    transition: padding-left 0.2s;
    padding-left: 20px;
    color: #4e4449;
  }
`;

export const Mugshot = styled.img`
  z-index: 0;
  max-width: 100%;
  max-height: 100vh;
  float: right;
`;

export const PageContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
`;
