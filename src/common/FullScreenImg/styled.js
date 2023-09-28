import styled, { css } from 'styled-components';
import { themeFonts } from "../theme";

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border: 1px solid black;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ${({ active }) =>
    !active &&
    css`
      display: none;
    `}
`;

export const OverlayContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  text-align: center;
  position: relative;
`;

export const OverlayImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Description = styled.div`
  font-family: ${themeFonts.brandFont};
  font-size: 10px;
`;
