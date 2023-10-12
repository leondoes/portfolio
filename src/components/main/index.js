import React, { useEffect} from "react";
import PageLayout from "../../layout/pageLayout";

const MainPage = () => {
  useEffect(() => {
    document.title = "React Rain";
  }, []);

  return (
    <PageLayout>
<div>Hello World</div>
    </PageLayout>
  );
};

export default MainPage;