import React from "react";
import { useTweets } from "../../../hooks/useTweets";
import { Tweet } from "../../Tweet/Tweet";

const TweetsFeed: React.FC = () => {
  const { tweets } = useTweets();
  return (
    <div>
      {tweets.map((tweet, idx) => {
        return <Tweet tweet={tweet} key={idx} />;
      })}
    </div>
  );
};

export default TweetsFeed;
