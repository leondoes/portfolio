import React from 'react';
import ToggleSection from '../../../common/ToggleSection';
import CatnadianPartyCard from '../Cards/CatnadianPartyCard';
import { Drawer } from '../styled';

const CatnadianPartySection = ({ isOpen, toggleSection, closeSection }) => (
  <>
    <ToggleSection isOpen={isOpen} onClick={toggleSection} description="A parody cat-centric political party website built in React.js">
      The Catnadian Party of Canada
    </ToggleSection>
    <Drawer isOpen={isOpen}>
      <CatnadianPartyCard onClose={closeSection} />
    </Drawer>
  </>
);

export default CatnadianPartySection;
