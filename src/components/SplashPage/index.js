import React, { useEffect, useState } from "react";
import img from "../../assets/temp_mugshot.png";
import {
  LinkContainer,
  AboutLink,
  WorkLink,
  ContactLink,
  PageContainer,
  Mugshot,
} from "./styled";

const getWorkLinkText = (workHover, contactHover) => {
  let workLinkText = ""
  switch(`${workHover}-${contactHover}`) {
    case "true-false":
      workLinkText = "Work";
      break;
    case "false-true": 
      workLinkText = "my";
      break;
    default:
      workLinkText = "what";
  }
  return workLinkText
}


const SplashPage = () => {
  useEffect(() => {
    document.title = "leondoes.";
  }, []);

  const [aboutHover, setAboutHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);


  return (
    <PageContainer>
      <LinkContainer>
        <AboutLink
          onMouseEnter={() => setAboutHover(true)}
          onMouseLeave={() => setAboutHover(false)}
          to="/about"
        >
          {aboutHover ? `About` : `this is`}
        </AboutLink>
        <WorkLink
          onMouseEnter={() => setWorkHover(true)}
          onMouseLeave={() => setWorkHover(false)}
          to="/work"
        >
          {getWorkLinkText(workHover, contactHover)}
        </WorkLink>
        <ContactLink
          onMouseEnter={() => setContactHover(true)}
          onMouseLeave={() => setContactHover(false)}
          to="/Contact"
        >
          {contactHover ? `Contact` : <div style={{display: "flex"}}>leon<div style={{color:"#ff311b"}}>does.</div></div>} 
        </ContactLink>
      </LinkContainer>
      <Mugshot src={img} alt="portrait" />
    </PageContainer>
  );
};

export default SplashPage;
