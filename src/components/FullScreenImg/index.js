import React, { useState } from 'react';
import { ImageContainer, Image, Overlay, OverlayImage } from './styled'; // Update the import path

function FullScreenImg({ src }) {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <ImageContainer className="image-container" onClick={toggleFullscreen}>
      <Image src={src} alt="Fullscreen Image" />
      <Overlay active={fullscreen}>
        <OverlayImage src={src} alt="Fullscreen Image" />
      </Overlay>
    </ImageContainer>
  );
}

export default FullScreenImg;
