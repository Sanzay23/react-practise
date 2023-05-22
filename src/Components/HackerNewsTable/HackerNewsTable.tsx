import useHackerNews from "./HackerNews.service";
import { NewsContainer, StyledTable } from "./HackerNewsTable.styled";
import TableTab from "./hackernewscomponents/HackerTabTable";

const HackerNewsTable = () => {
  const { data: news, error, isLoading } = useHackerNews();

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <NewsContainer>
      <StyledTable>
        <TableTab news={news} />
      </StyledTable>
    </NewsContainer>
  );
};

export default HackerNewsTable;
