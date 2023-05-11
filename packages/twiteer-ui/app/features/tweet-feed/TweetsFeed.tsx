"use client";

import React from "react";
import { useTweets } from "../../context/TweetContext";
import { Tweet } from "../tweet";

const TweetsFeed: React.FC = () => {
  const { getTweets } = useTweets();
  const tweets = getTweets();
  console.log(tweets);
  if (typeof tweets === "undefined") return <div>error</div>;
  return (
    <div>
      {tweets.map((tweet, idx) => {
        return <Tweet tweet={tweet} key={idx} />;
      })}
    </div>
  );
};

export default TweetsFeed;
