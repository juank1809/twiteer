import { createContext, useContext, useState } from "react";
import { ITweet } from "../types/tweet";
import { tweetsData } from "../tweetsData";

export const TweetContext = createContext<TweetContextValues | undefined>(
  undefined
);

interface TweetContextValues {
  tweets: ITweet[];
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>;
}

interface TweetContextProviderChildren {
  children: React.ReactNode;
}

export const TweetContextProvider: React.FC<TweetContextProviderChildren> = ({
  children,
}) => {
  const [tweets, setTweets] = useState<ITweet[]>(tweetsData);
  const value: TweetContextValues = { tweets, setTweets };
  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
};

export function useTweetContext() {
  const context = useContext(TweetContext);
  if (context === undefined) {
    throw new Error(
      "TweetContext must be use used within TweetContextProvider Tree"
    );
  }
  return context;
}
