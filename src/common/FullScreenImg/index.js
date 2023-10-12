import React, { useState } from "react";
import { ImageContainer, Image, Overlay, OverlayImage, Description } from "./styled";

function FullScreenImg({ src, alt, description }) {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <ImageContainer
      className={`image-container ${fullscreen ? "fullscreen" : ""}`}
      onClick={toggleFullscreen}
    >
      <Image src={src} alt={alt} />
      {fullscreen && (
        <Overlay active={fullscreen}>
          <div className="fullscreen-content">
            <OverlayImage src={src} alt={alt} />
            {description && <Description>{description}</Description>}
          </div>
        </Overlay>
      )}
      {!fullscreen && description && <Description>{description}</Description>}
    </ImageContainer>
  );
}

export default FullScreenImg;
