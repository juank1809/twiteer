import React from "react";
import { useTweets } from "../../context/TweetContext";
import { Tweet } from "../tweet";

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
