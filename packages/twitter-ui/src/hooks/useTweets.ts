import { useTweetContext } from "../context/TweetContext";

import { ITweet } from "../types/tweet";

export function useTweets() {
  const { tweets, setTweets } = useTweetContext();

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
    setTweets([
      { ...tweet, id: tweets.length + 1, retweetId: tweet.id, type: "retweet" },
      ...tweets,
    ]);
  };
  return {
    tweets,
    incrementFavorite,
    decrementFavorite,
    addTweet,
    addRetweet,
  };
}
