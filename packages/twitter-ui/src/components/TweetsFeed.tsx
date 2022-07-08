import React from "react";
import { useTweets } from "../hooks/useTweets";
import Tweet from "./Tweet";
import TweetTextArea from "./TweetTextArea";

const TweetsFeed: React.FC = ({}) => {
  const { tweets } = useTweets();
  return (
    <div>
      <TweetTextArea />
      {tweets.map((tweet, idx) => {
        return <Tweet tweet={tweet} key={idx} />;
      })}
    </div>
  );
};

export default TweetsFeed;
