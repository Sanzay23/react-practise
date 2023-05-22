import styled from "styled-components";

interface MenuItem{
    title: string,
    path:string,
  }
  interface TabButtons {
    isClicked: boolean;
    items: MenuItem[];
  }
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: center;
`;


const StyledTabs = styled.div `
  width: 100%;
  height: 100%;
`;


export  default {
AppContainer , StyledTabs ,
}