import React from "react";
import { ReviewsAndQuestions } from "../../../assets/strings.en.js";
import { Card, Subtitle, Copy, GitHubLogo, GitHubContainer, CloseButton  } from "../styled";
import FullScreenImg from "../../../common/FullScreenImg/index.js";
import github from "../../../assets/github_white.png";

import raq_overall from "../../../assets/raq_overall.png";
import raq_responsive from "../../../assets/raq_responsive.png"
import raq_testing from "../../../assets/raq_testing.png"

const ReviewsAndQuestionsCard = ({onClose}) => (
  <Card id="Profile">
    <Subtitle> <a href="https://leondoes.github.io/reviewsandquestions/" target="_blank" rel="noreferrer">
    {ReviewsAndQuestions.Subtitle}
  </a></Subtitle>
    <Copy>{ReviewsAndQuestions.Body}</Copy>
    <FullScreenImg
      src={raq_overall}
      alt="Overall component"
      description="Overall Section summerizing totals"
    />
    <Copy>{ReviewsAndQuestions.Body1}</Copy>
    <FullScreenImg
      src={raq_responsive}
      alt="Responsive Design"
      description="The responsive design of the component"
    />
    <Copy>{ReviewsAndQuestions.Body2}</Copy>
    <FullScreenImg
      src={raq_testing}
      alt="Testing Controls"
      description="Fully functional testing controls simulating empty states"
    />
    <Copy>{ReviewsAndQuestions.Body3}</Copy>
    <Copy>
      You can find the Reviews & Questions Demo at
      <GitHubContainer
        onClick={() => {
          window.open("https://leondoes.github.io/reviewsandquestions/", "_blank", "noopener,noreferrer");
        }}
      >
        <GitHubLogo src={github} alt="GitHub Logo" />
        GitHub<div style={{ "fontWeight": "400" }}>Pages</div>
      </GitHubContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Copy>
    
  </Card>
);

export default ReviewsAndQuestionsCard;
