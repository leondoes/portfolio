import { PageContainer, ContentContainer } from "./styled";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
