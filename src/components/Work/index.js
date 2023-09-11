import React from "react";
import PageLayout from "../../layout/PageLayout";
import { PageContainer, Card, Deck, Title, Subtitle, Copy } from "./styled";

const Work = () => (
  <PageLayout>
    <PageContainer>
      <Title>A Showcase of My Web Dev Projects</Title>
      <Copy>
        Welcome to my portfolio examples section, where I unveil my prowess as a
        React developer. These projects are a testament to my commitment to
        creating exceptional web applications that blend functionality with
        aesthetics. Each example embodies a unique challenge I've conquered,
        revealing my knack for transforming concepts into captivating digital
        solutions. Dive in and be inspired!
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
