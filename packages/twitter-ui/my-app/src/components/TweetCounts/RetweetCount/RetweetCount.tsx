import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import type { TweetProps } from "../../Tweet";
import useHandleNewTweet from "../../../hooks/useHandleNewTweet";

const RetweetCount: React.FC<TweetProps> = ({ tweet, tweets, setTweets }) => {
  const { retweetCount } = tweet;
  const { handleRetweet } = useHandleRetweet(tweet, tweets, setTweets);

  const [isAlreadyRetweeted, setIsAlreadyRetweeted] = useState<boolean>(false);
  const [newRetweetCount, setNewRetweetCount] = useState(retweetCount);

  const handleRetweetCount = () => () => {
    setIsAlreadyRetweeted((prev) => !prev);

    const calculateNewFavoriteCount = isAlreadyRetweeted ? -1 : 1;
    setNewRetweetCount((prev) => prev + calculateNewFavoriteCount);
  };
  return (
    <span
      title="retweet count"
      onClick={() => {
        handleRetweet();
        handleRetweetCount();
      }}
      className="tweet__retweet-count"
    >
      <AutorenewIcon
        width={"18px"}
        style={{
          fill: isAlreadyRetweeted ? "green" : "",
        }}
      />{" "}
      {newRetweetCount}
    </span>
  );
};

export default React.memo(RetweetCount);
