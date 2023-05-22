import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HackerNews } from "./HackerNews.model";

const useHackerNews = () => {
  const fetchHackerNews = () =>
    axios
      .get<HackerNews[]>("http://localhost:3000/hackernews")
      .then((news) => news.data);

  return useQuery<HackerNews[], Error>({
    queryKey: ["hackerNews"],
    queryFn: fetchHackerNews,
  });
};

export default useHackerNews;
