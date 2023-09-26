import styled from "styled-components";


export const VideoContainer = styled.div`
  width: 100%; /* Set a fixed width */
  height: 500px; /* Set a fixed height for a 1:1 aspect ratio */
  position: relative;
  overflow: hidden; /* Hide overflow to prevent flickering */
  opacity: ${({ isVideoLoaded }) => (isVideoLoaded ? '1' : '0')};
  transition: opacity 0.3s ease; /* Add a smooth transition for opacity */
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;