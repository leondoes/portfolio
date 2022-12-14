import React from "react";

import { PageContainer, ContentContainer } from "./styled";
import NavBar from "../../components/navbar";
import { Link } from "react-router-dom";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <NavBar />
      <Link to='/aboutme'>about-me</Link>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
