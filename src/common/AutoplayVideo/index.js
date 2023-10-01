import React, { useRef, useEffect, useState } from "react";
import { VideoContainer, Video } from "./styled"; // Import your styled components from styled.js

const AutoplayVideo = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.muted = true;
      videoRef.current.controls = true;
      videoRef.current.loop = true;
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.addEventListener("loadedmetadata", () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <VideoContainer isVideoLoaded={isVideoLoaded}>
      <Video ref={videoRef}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default AutoplayVideo;
