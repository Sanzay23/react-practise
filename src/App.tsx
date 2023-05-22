import React, { useState } from "react";
import TabComponent from "./TabComponent";
import HackerNewsTable from "./Components/HackerNewsTable/HackerNewsTable";
import ImageSlider from "./Components/carousel/Carousel";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SubmitForms from "./Components/SubmitForm/SubmitForm";
import AppContainer from "./App.styled"
interface MenuItem {
  title: string;
  body: any;  
}

const App = () => {
  
  
  return (
    <div>
      
      <TabComponent/>
            <ReactQueryDevtools />
    </div>
  );
};

export default App;
