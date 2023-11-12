import React, { useState, useEffect, useRef } from "react";
import PageLayout from "../../layout/PageLayout";
import { PageContainer, Title, TopCopy, Drawer, } from "./styled";
import TanadianCireCard from "./Cards/TanadianCireCard";
import ProfileCard from "./Cards/ProfileCard";
import ReactRainCard from "./Cards/ReactRainCard";
import ToggleSection from "../../common/ToggleSection";

const Work = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const toggleRefs = useRef({});
  const topRef = useRef(null);

  const closeSection = () => {
    setVisibleSection(null);
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    if (visibleSection && toggleRefs.current[visibleSection]) {
      toggleRefs.current[visibleSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [visibleSection]);

  const toggleSection = (sectionName) => {
    setVisibleSection(visibleSection === sectionName ? null : sectionName);
  };

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
        <div ref={topRef}></div>
        <ToggleSection
          ref={(el) => (toggleRefs.current["TanadianCire"] = el)}
          onClick={() => toggleSection("TanadianCire")}
          description="Storefront mockup with sorting feature"
        >
          Tanadian Cire
        </ToggleSection>
        <Drawer isOpen={visibleSection === "TanadianCire"}>
          <TanadianCireCard onClose={closeSection}/>
        </Drawer>

        <ToggleSection
          ref={(el) => (toggleRefs.current["Profile"] = el)}
          onClick={() => toggleSection("Profile")}
          description="Profile menu converted to React.js"
        >
          Profile Menu
        </ToggleSection>
        <Drawer isOpen={visibleSection === "Profile"}>
          <ProfileCard onClose={closeSection}/>
        </Drawer>

        <ToggleSection
          ref={(el) => (toggleRefs.current["ReactRain"] = el)}
          onClick={() => toggleSection("ReactRain")}
          description="React.js based weather application"
        >
          ReactRain
        </ToggleSection>
        <Drawer isOpen={visibleSection === "ReactRain"}>
          <ReactRainCard onClose={closeSection}/>
        </Drawer>
      </PageContainer>
    </PageLayout>
  );
};

export default Work;
