import  styled  from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Tabs = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap : 20%;  
`;

const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color : black;

  &:hover {
    background-color: #e1e1e1;
  }

 
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 40px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export {
Container , Tabs , TabButton , Content , Title};