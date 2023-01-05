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

document.title = "";
const SplashPage = () => {
  useEffect(() => {
    document.title = "leondoes.";
  }, []);

  const [aboutHover, setAboutHover] = useState(false);
  const [experienceHover, setExperienceHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <PageContainer>
      <LinkContainer>
        <AboutLink
          onMouseEnter={() => setAboutHover(true)}
          onMouseLeave={() => setAboutHover(false)}
          to="/aboutme"
        >
          {aboutHover ? `About` : `this is`}
        </AboutLink>
        <WorkLink
          onMouseEnter={() => setExperienceHover(true)}
          onMouseLeave={() => setExperienceHover(false)}
          to="/experience"
        >
          {experienceHover ? `Work` : `what`}
        </WorkLink>
        <ContactLink
          onMouseEnter={() => setContactHover(true)}
          onMouseLeave={() => setContactHover(false)}
          to="/Contact"
        >
          {contactHover ? `Contact` : `leondoes. `} 
        </ContactLink>
      </LinkContainer>
      <Mugshot src={img} alt="portrait" />
    </PageContainer>
  );
};

export default SplashPage;
