import React from "react";
import { ScrollDownLink,ScrollDownDesc } from "./styled";

const ScrollToSection = ({ targetId, children, description }) => {
  const scrollIntoView = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollDownLink onClick={scrollIntoView}>
      {children}
      <ScrollDownDesc>{description}</ScrollDownDesc>
    </ScrollDownLink>
  );
};

export default ScrollToSection;
