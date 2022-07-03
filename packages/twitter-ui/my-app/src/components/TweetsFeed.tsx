import React from "react";
import { ITweet } from "../types/tweet";
import Tweet from "./Tweet";

interface TweetsFeedProps {
  tweets: ITweet[];
}

const TweetsFeed: React.FC<TweetsFeedProps> = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, idx) => {
        return <Tweet key={idx} {...tweet} />;
      })}
    </div>
  );
};

export default TweetsFeed;
