import React from 'react';
import ToggleSection from '../../../common/ToggleSection';
import TanadianCireCard from '../Cards/TanadianCireCard';
import { Drawer } from '../styled';

const TanadianCireSection = ({ isOpen, toggleSection, closeSection }) => (
  <>
    <ToggleSection onClick={toggleSection} description="Storefront mockup with sorting feature">
      Tanadian Cire
    </ToggleSection>
    <Drawer isOpen={isOpen}>
      <TanadianCireCard onClose={closeSection} />
    </Drawer>
  </>
);

export default TanadianCireSection;
