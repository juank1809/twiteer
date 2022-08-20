import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { RetweetModal } from "../../Modal";
import type { TweetProps } from "../../Tweet/Tweet";

const RetweetCount: React.FC<TweetProps> = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRetweetClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <span
        title="retweet count"
        onClick={() => handleRetweetClick()}
        className="tweet__retweet-count"
      >
        <AutorenewIcon
          width={"18px"}
          style={{
            fill: tweet.type === "retweet" ? "green" : "",
          }}
        />{" "}
        {tweet.retweetCount}
      </span>
      <RetweetModal tweet={tweet} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default React.memo(RetweetCount);
