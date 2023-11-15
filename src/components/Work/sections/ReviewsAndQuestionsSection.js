import React from 'react';
import ToggleSection from '../../../common/ToggleSection';
import ReviewsAndQuestionsCard from '../Cards/ReviewsAndQuestionsCard';
import { Drawer } from '../styled';

const ReviewsAndQuestionsSection = ({ isOpen, toggleSection, closeSection }) => (
  <>
    <ToggleSection isOpen={isOpen} onClick={toggleSection} description="Convert 3rd party module to native code">
      Reviews & Questions
    </ToggleSection>
    <Drawer isOpen={isOpen}>
      <ReviewsAndQuestionsCard onClose={closeSection} />
    </Drawer>
  </>
);

export default ReviewsAndQuestionsSection;
