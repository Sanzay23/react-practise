import styled from "styled-components";

const NewsContainer = styled.div`  
background-color : #ddd;
align-content: center; 



`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  
  td, th {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  td{
    border: 2px solid #222222;
  }
  td:hover {
    background-color: #000000;
    color : #2efe32
  }
  
  th {
    background-color: #ffffff;
    border: 2px solid #ffffff;

  }
`;
const Styledontainer1 = styled.div``;

export { Styledontainer1, StyledTable, NewsContainer };
