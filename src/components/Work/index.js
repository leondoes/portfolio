import React from "react";
import PageLayout from "../../layout/PageLayout";
import { TanadianCire } from "../../assets/strings.en.js";
import {
  PageContainer,
  Card,
  Deck,
  Title,
  Subtitle,
  Copy,
  TopCopy,
  SideBySide,
  Img,
} from "./styled";

import recreation from "../../assets/ct_recreation.png";
import ct_structure from "../../assets/ct_structure.png";
import ct_productgridcode from "../../assets/ct_productgridcode.png";
import CodeSandbox_logo from "../../assets/CodeSandbox_logo.png";

import FullScreenImg from "../../common/FullScreenImg";
import AutoplayVideo from "../../common/AutoplayVideo";
import sortingvideo from "../../assets/sort_shop.mp4";
import ScrollToSection from "../../common/ScrollToSection";


const Work = () => (
  <PageLayout>
    <PageContainer>
      <Title>A Showcase of My Web Dev Projects</Title>
      <TopCopy>
        These projects showcase my skills in crafting functional and visually
        appealing web applications, demonstrating my ability to tackle unique
        challenges and create compelling digital solutions. Feel free to explore
        and get inspired by them.
      </TopCopy>

      {/* ScrollToSection Component */}
      <div id="top"></div>
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
          <Copy>{TanadianCire.Body1}</Copy>
          <Copy>{TanadianCire.Body2}</Copy>
          <SideBySide>
            <FullScreenImg
              src={ct_structure}
              alt="Picture of the structure of TC code"
              description=""
            />
            <FullScreenImg
              src={ct_productgridcode}
              alt="Picture of the product grid code"
              description=" The product grid component populates the page with each product in a card."
            />
          </SideBySide>
          <Copy>{TanadianCire.Body3}</Copy>
          <AutoplayVideo videoSource={sortingvideo} />
          <Copy>{TanadianCire.Body4}</Copy>
          <Copy>
            You can find the project at
            <a href="https://codesandbox.io/s/serene-voice-316qhh">
              <Img src={CodeSandbox_logo}/>
            </a>
          </Copy>
          <ScrollToSection targetId="top" description="">
            <TopCopy>Return</TopCopy>
          </ScrollToSection>
        </Card>
        <Card id="test">
          <Copy>Hello</Copy>
        </Card>
      </Deck>
    </PageContainer>
  </PageLayout>
);

export default Work;
