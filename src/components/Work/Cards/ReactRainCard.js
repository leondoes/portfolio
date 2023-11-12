import React from "react";
import { ReactRain } from "../../../assets/strings.en.js";
import { Card, Subtitle, Copy, GitHubLogo, GitHubContainer, CloseButton } from "../styled";
import FullScreenImg from "../../../common/FullScreenImg";
import rr_example from "../../../assets/rr_example.png";
import rr_structure from "../../../assets/rr_structure.png";
import github from "../../../assets/github_white.png";

const ReactRainCard = ({onClose}) => (
  <Card id="ReactRain">
    <Subtitle>
    <a href="https://leondoes.github.io/reactrain/" target="_blank" rel="noreferrer">
    {ReactRain.Subtitle}
  </a></Subtitle>
    <Copy>{ReactRain.Body}</Copy>
    <FullScreenImg
      src={rr_example}
      alt="Screenshot of the ReactRain app"
      description="An example of a search result using the ReactRain app"
    />
    <Copy>{ReactRain.Body1}</Copy>
    <FullScreenImg
      src={rr_structure}
      alt="Screenshot of some of the code used to build ReactRain"
      description="A sample of the code structure of ReactRain"
    />
    <Copy>{ReactRain.Body2}</Copy>
    <Copy>
      You can find ReactRain at
      <GitHubContainer
        onClick={() => {
          window.open("https://leondoes.github.io/reactrain/", "_blank", "noopener,noreferrer");
        }}
      >
        <GitHubLogo src={github} alt="GitHub Logo" />
        GitHub<div style={{ "fontWeight": "400" }}>Pages</div>
      </GitHubContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Copy>
  </Card>
);

export default ReactRainCard;
