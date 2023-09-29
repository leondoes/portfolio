import React from "react";
import PageLayout from "../../layout/PageLayout";
import { TanadianCire } from "../../assets/strings.en.js";
import { PageContainer, Card, Deck, Title, Subtitle, Copy } from "./styled";
import recreation from "../../assets/ct_recreation.png";
import FullScreenImg from "../../common/FullScreenImg";
import AutoplayVideo from "../../common/AutoplayVideo";
import sortingvideo from "../../assets/sort_shop.mp4";
import ScrollToSection from "../../common/ScrollToSection";

const Work = () => (
  <PageLayout>
    <PageContainer>
      <Title>A Showcase of My Web Dev Projects</Title>
      <Copy>
        These projects showcase my skills in crafting functional and visually
        appealing web applications, demonstrating my ability to tackle unique
        challenges and create compelling digital solutions. Feel free to explore
        and get inspired by them.
      </Copy>

      {/* ScrollToSection Component */}
      <ScrollToSection
        targetId="TanadianCire"
        description="Storefront mockup with sorting feature"
      >
        Tanadian Cire
      </ScrollToSection>
      <ScrollToSection
        targetId="test"
        description="Another section description"
      >
        Another Section
      </ScrollToSection>
      {/* ScrollToSection Component */}

      <Deck>
        <Card id="TanadianCire">
          <Subtitle>{TanadianCire.SubTitle}</Subtitle>
          <Copy>{TanadianCire.Body}</Copy>
          <FullScreenImg
            src={recreation}
            alt="Recreation of the UI"
            description="UI recreation of the top bar"
          />
          <Copy>{TanadianCire.body2}</Copy>
          <AutoplayVideo videoSource={sortingvideo} />
          <Copy>{TanadianCire.body3}</Copy>
        </Card>
        <Card id="test">
          <Copy>Hello</Copy>
        </Card>
      </Deck>
    </PageContainer>
  </PageLayout>
);

export default Work;
