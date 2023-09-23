import React, { useRef, useEffect } from "react";
import { VideoContainer, Video } from "./styled";

const AutoplayVideo = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.muted = true;
      videoRef.current.controls = false;
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <VideoContainer>
      <Video ref={videoRef}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default AutoplayVideo;
