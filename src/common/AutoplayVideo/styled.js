import styled from "styled-components";


export const VideoContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  opacity: ${({ isVideoLoaded }) => (isVideoLoaded ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: scale-down;
`;