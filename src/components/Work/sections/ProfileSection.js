import React from 'react';
import ToggleSection from '../../../common/ToggleSection';
import ProfileCard from '../Cards/ProfileCard';
import { Drawer } from '../styled';

const ProfileSection = ({ isOpen, toggleSection, closeSection }) => (
  <>
    <ToggleSection onClick={toggleSection} description="Profile menu converted to React.js">
      Profile Menu
    </ToggleSection>
    <Drawer isOpen={isOpen}>
      <ProfileCard onClose={closeSection} />
    </Drawer>
  </>
);

export default ProfileSection;
