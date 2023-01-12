import { PageContainer, ContentContainer } from "./styled";
import NavBar from "../../components/NavBar";


const PageLayout = ({ children, ...props }) => {

  return (
    <PageContainer {...props}>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
