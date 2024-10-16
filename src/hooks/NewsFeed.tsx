import { ReactNode, useContext, useState, createContext } from "react";
import { NewsFeed } from "@/types/admin/api/news-feed";

const initailNewsFeed: NewsFeed[] = [];

const newsFeedContext = createContext<{
  newsFeeds: NewsFeed[];
  setNewsFeeds: (val: NewsFeed[]) => void;
  selectedNewsFeed: NewsFeed | null;
  setSelectedNewsFeed: (val: NewsFeed | null) => void;
}>({
  newsFeeds: initailNewsFeed,
  setNewsFeeds: (val: NewsFeed[]) => {},
  selectedNewsFeed: null,
  setSelectedNewsFeed: (val: NewsFeed | null) => {},
});

export function NewsFeedContextProvider({ children }: { children: ReactNode }) {
  const [newsFeeds, setNewsFeeds] = useState<NewsFeed[]>(initailNewsFeed);
  const [selectedNewsFeed, setSelectedNewsFeed] = useState<NewsFeed | null>(
    () => {
      const storedNewsFeed = localStorage.getItem("selectedNewsFeed");

      if (storedNewsFeed) {
        return JSON.parse(storedNewsFeed);
      }
      return null;
    }
  );

  const onSetSelectedNewsFeed = (selectedNewsFeed: NewsFeed | null) => {
    if (selectedNewsFeed) {
      localStorage.setItem(
        "selectedNewsFeed",
        JSON.stringify(selectedNewsFeed)
      );
    } else {
      const storedNewsFeed = localStorage.getItem("selectedNewsFeed");
      if (storedNewsFeed) {
        localStorage.removeItem("selectedNewsFeed");
      }
    }
    setSelectedNewsFeed(selectedNewsFeed);
  };

  return (
    <newsFeedContext.Provider
      value={{
        newsFeeds: newsFeeds,
        setNewsFeeds: setNewsFeeds,
        selectedNewsFeed: selectedNewsFeed,
        setSelectedNewsFeed: onSetSelectedNewsFeed,
      }}
    >
      {children}
    </newsFeedContext.Provider>
  );
}

export const useNewsFeed = () => {
  const { newsFeeds, setNewsFeeds, selectedNewsFeed, setSelectedNewsFeed } =
    useContext(newsFeedContext);

  return { newsFeeds, setNewsFeeds, selectedNewsFeed, setSelectedNewsFeed };
};
