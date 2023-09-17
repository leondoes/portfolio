import React from "react";
import PageLayout from "../../layout/PageLayout";
import { PageContainer, Card, Deck, Title, Subtitle, Copy } from "./styled";

const Work = () => (
  <PageLayout>
    <PageContainer>
      <Title>A Showcase of My Web Dev Projects</Title>
      <Copy>
        Welcome to the portfolio examples section, where I present my
        proficiency as a React developer. These projects serve as a
        demonstration of my dedication to crafting exceptional web applications
        that seamlessly integrate functionality with aesthetics. Each showcased
        example represents a distinctive challenge I have successfully
        addressed, highlighting my ability to translate concepts into compelling
        digital solutions. Feel free to explore and draw inspiration from these
        projects.
      </Copy>
      <Deck>
        <Card>
          <div>
            <Subtitle>Tanadian Cire</Subtitle>
            <Copy>
              <div>
                This personal project aimed to develop a store-type component
                with the capacity to retrieve data from a database and present
                it within a store interface. Additionally, I sought to implement
                sorting functionality for these items. My primary objective was
                to replicate the features of a well-established online retail
                platform, employing only React, HTML, JavaScript, and CSS. While
                numerous components serve as placeholders, I take pride in my
                accomplishment of replicating the site and establishing a
                functional storefront.
              </div>
              <div>
                As a secondary goal, I endeavored to construct the entire
                project without relying on any libraries other than React. I
                pursued this approach for two significant reasons. Firstly, it
                presented a valuable challenge that allowed me to refine my
                skills. Secondly, it aligns with my philosophy that one should
                only introduce external dependencies when there is a compelling
                need, avoiding unnecessary additions. Utilizing a library, in
                this context, could have acted as a crutch.
              </div>

              <div>
                Finally, I developed components with a focus on enhancing
                reusability.
              </div>
            </Copy>
          </div>
        </Card>
        <Card>
          <Copy>Hello</Copy>
        </Card>
      </Deck>
    </PageContainer>
  </PageLayout>
);

export default Work;
