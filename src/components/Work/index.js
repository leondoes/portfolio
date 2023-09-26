import React, { useRef } from "react";
import PageLayout from "../../layout/PageLayout";
import { TanadianCire } from "../../assets/strings.en.js";
import {
  PageContainer,
  Card,
  Deck,
  Title,
  ScrollDownLink,
  ScrollToTarget,
  ScrollDownDesc,
  Subtitle,
  Copy,
} from "./styled";
import recreation from "../../assets/ct_recreation.png";
import FullScreenImg from "../../common/FullScreenImg";
import AutoplayVideo from "../../common/AutoplayVideo";
import sortingvideo from "../../assets/sort_shop.mp4";

const Work = () => {
  const scrollTargetRef = useRef(null);

  const scrollToTarget = () => {
    if (scrollTargetRef.current) {
      const navBarHeight = 130;
      const targetTop =
        scrollTargetRef.current.getBoundingClientRect().top +
        window.scrollY -
        navBarHeight;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageLayout>
      <PageContainer>
        <Title>A Showcase of My Web Dev Projects</Title>
        <Copy>
          These projects showcase my skills in crafting functional and visually
          appealing web applications, demonstrating my ability to tackle unique
          challenges and create compelling digital solutions. Feel free to
          explore and get inspired by them.
        </Copy>
        <ScrollDownLink onClick={scrollToTarget}>
          Tanadian Cire{" "}
          <ScrollDownDesc>
            Storefront mockup with sorting feature
          </ScrollDownDesc>
        </ScrollDownLink>
        <Deck>
          <Card>
            <ScrollToTarget>
              <Subtitle ref={scrollTargetRef}>{TanadianCire.SubTitle}</Subtitle>
            </ScrollToTarget>
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
          <Card>
            <Copy>Hello</Copy>
          </Card>
        </Deck>
      </PageContainer>
    </PageLayout>
  );
};

export default Work;
