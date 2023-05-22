import React, { useState } from "react";
import ImageSlider from "./Components/carousel/Carousel";
import HackerNews from "./Components/HackerNewsTable/HackerNewsTable";
import SubmitForms from "./Components/SubmitForm/SubmitForm";

interface MenuItem {
  title: string;
  component: (...args: any[]) => JSX.Element | null;
  id: number;
}

const Tab: MenuItem[] = [
  {
    id: 1,
    title: "Tab1",
    component: ImageSlider
  },
  {
    id: 2,
    title: "Tab2",
    component: HackerNews
  },
  {
    id: 3,
    title: "Tab3",
    component: SubmitForms
  }
];

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(Number(e.currentTarget.id));
  };

  return (
    <div className="container">
      <div className="tabs">
        {Tab.map((tab) => (
          <button
            key={tab.id}
            id={tab.id.toString()}
            disabled={currentTab === tab.id}
            onClick={handleTabClick}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">
        {Tab.map((tab) => (
          <div key={tab.id}>
            {currentTab === tab.id && (
              <div>
                <p className="title">{tab.title}</p>
                <tab.component />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
