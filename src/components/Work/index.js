import React from "react";
import PageLayout from "../../layout/PageLayout";
import {TanadianCire} from "../../assets/strings.en.js"
import { PageContainer, Card, Deck, Title, Subtitle, Copy,Recreation } from "./styled";
import recreation from "../../assets/ct_recreation.png";

const Work = () => (
  <PageLayout>
    <PageContainer>
      <Title>A Showcase of My Web Dev Projects</Title>
      <Copy>
        Welcome to the portfolio examples section, where I present my
        proficiency as a React developer. These projects serve as a
        demonstration of my dedication to crafting exceptional web applications
        that seamlessly integrate functionality with aesthetics. Each showcased
        example represents a distinctive challenge I have successfully
        addressed, highlighting my ability to translate concepts into compelling
        digital solutions. Feel free to explore and draw inspiration from these
        projects.
      </Copy>
      <Deck>
      <Card>{TanadianCire.Text}
        </Card>
        <Card>
          <Copy>Hello</Copy>
        </Card>
      </Deck>
    </PageContainer>
  </PageLayout>
);

export default Work;
