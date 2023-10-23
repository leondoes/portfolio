import React from "react";
import PageLayout from "../../layout/PageLayout";
import { TanadianCire, ProfileNav, ReactRain } from "../../assets/strings.en.js";
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
  GitHubLogo,
  GitHubContainer
} from "./styled";

import recreation from "../../assets/ct_recreation.png";
import ct_structure from "../../assets/ct_structure.png";
import ct_productgridcode from "../../assets/ct_productgridcode.png";
import CodeSandbox_logo from "../../assets/CodeSandbox_logo.png";
import pm_recreation from "../../assets/pm_recreation.png";
import pm_code from "../../assets/pm_code.png"
import rr_example from "../../assets/rr_example.png"
import rr_structure from "../../assets/rr_structure.png"
import github from "../../assets/github_white.png";

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
        targetId="Profile"
        description="Profile menu converted to React.js"
      >
        Profile Menu
      </ScrollToSection>

      <ScrollToSection
        targetId="ReactRain"
        description="React.js based weather application"
      >
        ReactRain
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
            You can find the Product List Page Demo at
            <a href="https://316qhh.csb.app/ProductListPage" target="_blank" rel="noreferrer">
              <Img src={CodeSandbox_logo}/>
            </a>
          </Copy>
          <ScrollToSection targetId="top" description="">
            <TopCopy>Return</TopCopy>
          </ScrollToSection>
        </Card>
        <Card id="Profile">
          <Subtitle>{ProfileNav.Subtitle}</Subtitle>
          <Copy>{ProfileNav.Body}</Copy>
          <FullScreenImg
              src={pm_recreation}
              alt="Profile Menu Recreation"
              description="Profile Menu Recreation"
            />
          <Copy>{ProfileNav.Body1}</Copy>
          <FullScreenImg
              src={pm_code}
              alt="Profile Menu Code Sample"
              description="A code snippet showing how state determins the displayed drawer"
            />
          <Copy>{ProfileNav.Body2}</Copy>
          <Copy>
            You can find the Profile Menu Demo at
            <a href="https://61c1jf.csb.app/" target="_blank" rel="noreferrer">
              <Img src={CodeSandbox_logo}/>
            </a>
          </Copy>
          <ScrollToSection targetId="top" description="">
            <TopCopy>Return</TopCopy>
          </ScrollToSection>
        </Card>
        <Card id="ReactRain">
          <Subtitle>{ReactRain.Subtitle}</Subtitle>
          <Copy>{ReactRain.Body}</Copy>
          <FullScreenImg
              src={rr_example}
              alt="Screenshot of the ReactRain app"
              description="An example of a search result using the ReactRain app"
            />
          <Copy>{ReactRain.Body1}</Copy>
          <FullScreenImg
              src={rr_structure}
              alt="Screenshot of some of the code used to build ReactRain"
              description="An sample of the code structure of ReactRain"
            />
          <Copy>{ReactRain.Body2}</Copy>
          <Copy>
            You can find ReactRain at
            <GitHubContainer
        onClick={() => {
          window.open("https://leondoes.github.io/reactrain/", "_blank", "noopener,noreferrer");
        }}
      >
        <GitHubLogo src={github} alt="GitHub Logo" />
        GitHub<div style={{ "font-weight": '400'}}>Pages</div>
      </GitHubContainer>
            
          </Copy>
        <ScrollToSection targetId="top" description="">
            <TopCopy>Return</TopCopy>
            </ScrollToSection>
        </Card>
      </Deck>
    </PageContainer>
  </PageLayout>
);

export default Work;
