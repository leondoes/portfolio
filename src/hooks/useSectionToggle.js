import { useState } from 'react';

export const useSectionToggle = () => {
  const [openSections, setOpenSections] = useState(new Set());

  const toggleSection = (sectionName) => {
    setOpenSections(prev => {
      const newOpenSections = new Set(prev);
      if (newOpenSections.has(sectionName)) {
        newOpenSections.delete(sectionName);
      } else {
        newOpenSections.add(sectionName);
      }
      return newOpenSections;
    });
  };

  const closeSection = (sectionName) => {
    setOpenSections(prev => new Set([...prev].filter(sec => sec !== sectionName)));
  };

  return { openSections, toggleSection, closeSection };
};
