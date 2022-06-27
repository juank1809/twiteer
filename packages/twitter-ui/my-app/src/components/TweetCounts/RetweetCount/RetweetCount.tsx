import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import type { TweetProps } from "../../Tweet";
import useHandleRetweet from "./useHandleRetweet";

const RetweetCount: React.FC<TweetProps> = ({ tweet, tweets, setTweets }) => {
  const { retweetCount, isAlreadyRetweeted } = tweet;
  const { handleRetweet } = useHandleRetweet(tweet, tweets, setTweets);
  return (
    <span
      title="retweet count"
      onClick={() => {
        handleRetweet();
      }}
      className="tweet__retweet-count"
    >
      <AutorenewIcon
        width={"18px"}
        style={{
          fill: isAlreadyRetweeted ? "green" : "",
        }}
      />{" "}
      {retweetCount}
    </span>
  );
};

export default React.memo(RetweetCount);
