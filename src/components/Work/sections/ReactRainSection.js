import React from 'react';
import ToggleSection from '../../../common/ToggleSection';
import ReactRainCard from '../Cards/ReactRainCard';
import { Drawer } from '../styled';

const ReactRainSection = ({ isOpen, toggleSection, closeSection }) => (
  <>
    <ToggleSection onClick={toggleSection} description="React.js based weather application">
      ReactRain
    </ToggleSection>
    <Drawer isOpen={isOpen}>
      <ReactRainCard onClose={closeSection} />
    </Drawer>
  </>
);

export default ReactRainSection;
