import React from "react";
import PageLayout from "../../layout/PageLayout";
import { PageContainer, Card, Deck, Title, Subtitle, Copy } from "./styled";

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
        <Card>
          <div>
            <Subtitle>Hello2</Subtitle>
            <Copy>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Copy>
          </div>
        </Card>
        <Card>
          <Copy>Hello</Copy>
        </Card>
      </Deck>
    </PageContainer>
  </PageLayout>
);

export default Work;
