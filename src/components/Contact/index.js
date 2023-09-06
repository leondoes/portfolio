import React from "react";
import PageLayout from "../../layout/PageLayout";
import { PageContainer, EmailContainer, Title, Copy, Subtitle } from "./styled";
import { themeColors } from "../../common/theme";
const brandColor = themeColors.brand;

const Contact = () => (
  <PageLayout style={{height: "100vh"}}>
    <PageContainer >
      <Title>Get in Touch Today</Title>

      <Copy>
        I'm excited to hear about your React project and how I can contribute to
        its success. Whether you're a startup looking to build a new web
        application or a business seeking to enhance an existing one, I'm here
        to turn your vision into reality.
      </Copy>

      <Copy>
        Don't hesitate to reach out for inquiries, project proposals, or just to
        say hello. I'm always eager to discuss exciting new opportunities and
        challenges in the world of React development.
      </Copy>
      <Subtitle>Let's build something amazing together!</Subtitle>
      <EmailContainer
        onClick={() =>
          (window.location.href = "mailto:leondoes.contact@gmail.com")
        }
      >
        leon<div style={{ color: brandColor }}>does.</div>contact@gmail.com
      </EmailContainer>
    </PageContainer>
  </PageLayout>
);
export default Contact;
