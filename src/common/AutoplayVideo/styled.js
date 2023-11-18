import styled from "styled-components";


export const Video = styled.video`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px; // Ensures the video has rounded corners
    object-fit: cover; // Ensures the video content covers the player area
    overflow: hidden;
`;

export const VideoContainer = styled.div`
   width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 90%; // Adjust this percentage to match the video content's aspect ratio
  border-radius: 18px;
  -moz-box-shadow: 0 0 10px #5d5f61;
  -webkit-box-shadow: 0 0 10px #5d5f61;
  box-shadow: 0 0 10x #5d5f61;
  opacity: ${({ isVideoLoaded }) => (isVideoLoaded ? '1' : '0')};
  transition: opacity 0.3s ease;
`;
