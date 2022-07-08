import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import type { TweetProps } from "../../Tweet";
import { useTweets } from "../../../hooks/useTweets";

const RetweetCount: React.FC<TweetProps> = ({ tweet }) => {
  const { addRetweet } = useTweets();
  const [isAlreadyRetweeted, setIsAlreadyRetweeted] = useState<boolean>(false);

  const handleRetweetClick = () => {
    addRetweet(tweet);
    setIsAlreadyRetweeted(true);
  };
  return (
    <span
      title="retweet count"
      onClick={() => handleRetweetClick()}
      className="tweet__retweet-count"
    >
      <AutorenewIcon
        width={"18px"}
        style={{
          fill: isAlreadyRetweeted ? "green" : "",
        }}
      />{" "}
      {4}
    </span>
  );
};

export default React.memo(RetweetCount);
