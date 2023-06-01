import React, { useState } from "react";
import ImageSlider from "../carousel/Carousel";
import HackerNews from "../HackerNewsTable/HackerNewsTable";
import SubmitForms from "../SubmitForm/SubmitForm";

import { Container, Tabs, TabButton, Content, Title } from "./Tabs.styled";

interface MenuItem {
  title: string;
  component: (...args: any[]) => JSX.Element | null;
  id: number;
}

const Tab: MenuItem[] = [
  {
    id: 1,
    title: "Tab1",
    component: ImageSlider,
  },
  {
    id: 2,
    title: "Tab2",
    component: HackerNews,
  },
  {
    id: 3,
    title: "Tab3",
    component: SubmitForms,
  },
];

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(Number(e.currentTarget.id));
  };

  return (
    <Container>
      <Tabs>
        {Tab.map((tab) => (
          <TabButton
            key={tab.id}
            id={tab.id.toString()}
            disabled={currentTab === tab.id}
            onClick={handleTabClick}
          >
            {tab.title}
          </TabButton>
        ))}
      </Tabs>
      <Content>
        {Tab.map((tab) => (
          <div key={tab.id}>
            {currentTab === tab.id && (
              <div>
                <Title>{tab.title}</Title>
                <tab.component />
              </div>
            )}
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default TabComponent;
