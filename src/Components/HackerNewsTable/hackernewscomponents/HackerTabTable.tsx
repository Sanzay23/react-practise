import { HackerNews } from "../HackerNews.model";
import { StyledTable } from "../HackerNewsTable.styled";
import React  from 'react';
interface TableProps {
  news: HackerNews[];
}

const TableTab: React.FunctionComponent<TableProps> = ({ news }) => {
  return (
    
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
);
};

export default TableTab;
