import React from "react";
import { ITweet } from "../types/tweet";

export interface TweetProps extends ITweet {}

const Tweet: React.FC<TweetProps> = ({}) => {
  return <div>Tweet</div>;
};

export default Tweet;
