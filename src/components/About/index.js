import React from "react";
import PageLayout from "../../layout/PageLayout";
import { Copy, PageContainer, Subtitle, Title } from "./styled";

const About = () => (
  <PageLayout title="About">
    <PageContainer>
      <Title>I design & develop front-end REACT applications</Title>
      <Subtitle>About</Subtitle>
      <Copy>
        <div>
          Hi there! My name is Leon and I live in Toronto Canada. I am a highly
          motivated and detail-oriented REACT developer with a passion for
          creating intuitive, user-friendly web applications. I have a strong
          foundation in HTML, CSS, and JavaScript, and have gained valuable
          skills in REACT and other relevant technologies. I am proficient in
          agile development methodologies and have had the opportunity to work
          on a wide range of web-based projects, collaborating with
          cross-functional teams to bring ideas to life. I am always looking for
          ways to improve and expand my skillset, and am excited to take on new
          challenges as a freelance REACT developer.
        </div>
        <div>
          In my previous roles, I have consistently delivered high-quality code
          and have a strong track record of meeting project deadlines. I am able
          to quickly grasp new concepts and technologies, and am always looking
          for ways to optimize and streamline the development process. Whether
          working on a small, standalone application or a large-scale project, I
          am dedicated to delivering the best possible product to my clients.
        </div>
        <div>
          In addition to my technical skills, I am a strong communicator and
          enjoy collaborating with others to achieve common goals. I am
          adaptable and thrive in dynamic environments, and am always looking
          for ways to contribute to the success of the team. I am excited to
          bring my skills and experience to new projects as a freelance REACT
          developer, and am confident that I can make a positive impact on your
          team.
        </div>
        
        <div>When I'm not coding, you can find me staying up-to-date on the latest
        industry trends and techonoligies or tinkering with new projects on my
        own time. I am excited to bring my skills and enthusiasm to your project
        and help bring your vision to life!</div>
      </Copy>
    </PageContainer>
  </PageLayout>
);
export default About;
