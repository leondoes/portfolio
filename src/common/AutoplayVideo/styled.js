import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100%) */
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;