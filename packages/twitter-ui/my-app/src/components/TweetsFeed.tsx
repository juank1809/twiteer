import React from "react";
import { ITweet } from "../types/tweet";

interface TweetsFeedProps {
  tweets: ITweet[];
}

const TweetsFeed: React.FC<TweetsFeedProps> = ({ tweets }) => {
  return <div>TweetsFeed</div>;
};

export default TweetsFeed;
