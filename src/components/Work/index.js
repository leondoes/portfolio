import React from 'react';
import PageLayout from '../../layout/PageLayout';
import { PageContainer, Title, TopCopy } from './styled';
import { useSectionToggle } from '../../hooks/useSectionToggle';
import TanadianCireSection from './sections/TanadianCireSection';
import CatnadianPartySection from './sections/CatnadianPartySection';
import ProfileSection from './sections/ProfileSection';
import ReactRainSection from './sections/ReactRainSection';
import ReviewsAndQuestionsSection from './sections/ReviewsAndQuestionsSection';

const Work = () => {
  const { openSections, toggleSection, closeSection } = useSectionToggle();
  return (
    <PageLayout>
      <PageContainer>
        <Title>A Showcase of My Web Dev Projects</Title>
        <TopCopy>
          These projects showcase my skills in crafting functional and visually
          appealing web applications, demonstrating my ability to tackle unique
          challenges and create compelling digital solutions. Feel free to
          explore and get inspired by them.
        </TopCopy>
        <CatnadianPartySection
          isOpen={openSections.has("CatnadianParty")}
          toggleSection={() => toggleSection("CatnadianParty")}
          closeSection={() => closeSection("CatnadianParty")}
          />
        <ReviewsAndQuestionsSection
          isOpen={openSections.has("ReviewsAndQuestions")}
          toggleSection={() => toggleSection("ReviewsAndQuestions")}
          closeSection={() => closeSection("ReviewsAndQuestions")}
          />
        <TanadianCireSection
          isOpen={openSections.has("TanadianCire")}
          toggleSection={() => toggleSection("TanadianCire")}
          closeSection={() => closeSection("TanadianCire")}
        />
        <ReactRainSection
          isOpen={openSections.has("ReactRain")}
          toggleSection={() => toggleSection("ReactRain")}
          closeSection={() => closeSection("ReactRain")}
        />
        <ProfileSection
          isOpen={openSections.has("Profile")}
          toggleSection={() => toggleSection("Profile")}
          closeSection={() => closeSection("Profile")}
        />
      </PageContainer>
    </PageLayout>
  );
};

export default Work;
