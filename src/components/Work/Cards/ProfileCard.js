import React from "react";
import { ProfileNav } from "../../../assets/strings.en.js";
import { Card, Subtitle, Copy, Img, CloseButton } from "../styled";
import FullScreenImg from "../../../common/FullScreenImg";
import pm_recreation from "../../../assets/pm_recreation.png";
import pm_code from "../../../assets/pm_code.png";
import CodeSandbox_logo from "../../../assets/CodeSandbox_logo.png";

const ProfileCard = ({onClose}) => (
  <Card id="Profile">
    <Subtitle> <a href="https://61c1jf.csb.app/" target="_blank" rel="noreferrer">
    {ProfileNav.Subtitle}
  </a></Subtitle>
    <Copy>{ProfileNav.Body}</Copy>
    <FullScreenImg
      src={pm_recreation}
      alt="Profile Menu Recreation"
      description="Profile Menu Recreation"
    />
    <Copy>{ProfileNav.Body1}</Copy>
    <FullScreenImg
      src={pm_code}
      alt="Profile Menu Code Sample"
      description="A code snippet showing how state determines the displayed drawer"
    />
    <Copy>{ProfileNav.Body2}</Copy>
    <Copy>
      You can find the Profile Menu Demo at
      <a href="https://61c1jf.csb.app/" target="_blank" rel="noreferrer">
        <Img src={CodeSandbox_logo} />
      </a>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Copy>
    
  </Card>
);

export default ProfileCard;
