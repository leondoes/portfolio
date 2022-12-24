import React, { useEffect } from "react";

import { PageContainer, ContentContainer } from "./styled";
import NavBar from "../../components/NavBar";


const PageLayout = ({ children, ...props }) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <PageContainer {...props}>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
