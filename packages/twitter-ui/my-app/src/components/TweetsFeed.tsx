import React, { useState } from "react";
import { ITweet } from "../types/tweet";
import Tweet from "./Tweet";

interface TweetsFeedProps {}

const tweetsData = [
  {
    id: 1,
    user: {
      fullName: "Christoper Francisco",
      username: "@christopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    isAlreadyFavorite: false,
    isAlreadyRetweeted: false,
  },
  {
    id: 2,
    user: {
      fullName: "Jaun García",
      username: "@juank",
    },
    message: `Her ay 70 TL ücret.
    Günde 7-8 kere kopma. 
    3 haftadır her aradığımda "Ekip arkadaşlarımız çalışıyor." yanıtı, sanırım fiber falan döşüyorlar.`,
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    isAlreadyFavorite: false,
    isAlreadyRetweeted: false,
  },

  {
    id: 3,
    user: {
      fullName: "Daniel Fernando",
      username: "@dani",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    isAlreadyFavorite: false,
    isAlreadyRetweeted: false,
  },
];

const TweetsFeed: React.FC<TweetsFeedProps> = ({}) => {
  const [tweets, setTweets] = useState<ITweet[]>(() => {
    const inMemoryTweets = localStorage.getItem("tweets");
    const initialValue = inMemoryTweets
      ? JSON.parse(inMemoryTweets)
      : tweetsData;
    return initialValue;
  });

  console.log(tweets);
  return (
    <div>
      {tweets.map((tweet, idx) => {
        return (
          <Tweet
            tweet={tweet}
            tweets={tweets}
            setTweets={setTweets}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default TweetsFeed;
