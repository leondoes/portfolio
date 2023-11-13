export const scrollToBottomOfElement = (elementRef) => {
    const bottomOfElement = elementRef.current.getBoundingClientRect().bottom + window.pageYOffset;
    window.scrollTo({
      top: bottomOfElement,
      behavior: 'smooth'
    });
  };
  