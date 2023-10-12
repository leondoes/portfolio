import React from "react";
import PageLayout from "../../layout/PageLayout";
import {
  PageContainer,
  EmailContainer,
  Title,
  Copy,
  Subtitle,
  GitHubLogo,
  GitHubContainer,
  EmailVerified
} from "./styled";
import github from "../../assets/github_white.png";
import EmailReCAPTCHA from "../../common/EmailReCAPTCHA";

const Contact = () => (
  <PageLayout /*style={{ height: "100vh" }}*/>
    <PageContainer>
      <Title>Get in Touch Today</Title>

      <Copy>
        <div>
          I'm excited to hear about your REACT project and how I can contribute
          to its success. Whether you're a startup looking to build a new web
          application or a business seeking to enhance an existing one, I'm here
          to turn your vision into reality.
        </div>

        <div>
          Don't hesitate to reach out for inquiries, project proposals, or just
          to say hello. I'm always eager to discuss exciting new opportunities
          and challenges in the world of web development.
        </div>
      </Copy>
      <Subtitle>Let's build something amazing together!</Subtitle>
      <EmailContainer>📧
      <EmailVerified
        onClick={() => {
          window.open("mailto:leondoes.contact@gmail.com", "_blank", "noopener,noreferrer");
        }}
      >
        <EmailReCAPTCHA/>
      </EmailVerified>
      </EmailContainer>
      <GitHubContainer
        onClick={() => {
          window.open("https://github.com/leondoes", "_blank", "noopener,noreferrer");
        }}
      >
        <GitHubLogo src={github} alt="GitHub Logo" />
        GitHub
      </GitHubContainer>
    </PageContainer>
  </PageLayout>
);
export default Contact;
