import { createContext, useContext, useState } from "react";
import { ITweet } from "../types/tweet";
import { tweetsData } from "../tweetsData";

export const TweetContext = createContext<TweetContextValues | undefined>(
  undefined
);

export interface TweetContextValues {
  tweets: ITweet[];
  addTweet: (tweet: ITweet) => void;
  addRetweet: (tweet: ITweet) => void;
  incrementFavorite: (tweetId: number) => void;
  decrementFavorite: (tweetId: number) => void;
}

interface TweetContextProviderChildren {
  children: React.ReactNode;
}

export const TweetContextProvider: React.FC<TweetContextProviderChildren> = ({
  children,
}) => {
  const [tweets, setTweets] = useState<ITweet[]>(tweetsData);

  const incrementFavorite = (id: number) => {
    const findAndIncrementTweetById = tweets.map((tweet) => {
      return tweet.id === id
        ? {
            ...tweet,
            favoriteCount: tweet.favoriteCount + 1,
          }
        : tweet;
    });
    setTweets(findAndIncrementTweetById);
  };

  const decrementFavorite = (id: number) => {
    const findAndDecrementTweetById = tweets.map((tweet) => {
      return tweet.id === id
        ? {
            ...tweet,
            favoriteCount: tweet.favoriteCount - 1,
          }
        : tweet;
    });

    setTweets(findAndDecrementTweetById);
  };

  const addTweet = (tweet: ITweet) => {
    setTweets((prevTweets) => [tweet, ...prevTweets]);
  };

  const addRetweet = (tweet: ITweet) => {
    setTweets([{ ...tweet, id: tweet.id, type: "retweet" }, ...tweets]);
  };

  const value: TweetContextValues = {
    tweets,
    addTweet,
    addRetweet,
    incrementFavorite,
    decrementFavorite,
  };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
};

export function useTweets() {
  const context = useContext(TweetContext);
  if (context === undefined) {
    throw new Error(
      "TweetContext must be use used within TweetContextProvider Tree"
    );
  }
  return context;
}
