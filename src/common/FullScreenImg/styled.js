import styled, { css } from 'styled-components';
import { themeFonts} from "../theme";

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
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
`;

export const OverlayImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export const Description = styled.div `
font-family: ${themeFonts.brandFont};
font-size: 10px;
`