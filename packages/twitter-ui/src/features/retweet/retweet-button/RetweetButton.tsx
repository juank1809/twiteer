import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import type { TweetProps } from "../../tweet/Tweet";
import DropDown from "rc-dropdown";
import RetweetOptionsMenu from "../retweet-menu/RetweetOptionsMenu";

const RetweetCount: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <>
      <DropDown
        overlayClassName="dropdown"
        trigger={["click"]}
        placement={"bottomCenter"}
        overlay={<RetweetOptionsMenu tweet={tweet} />}
      >
        <span title="retweet count" className="tweet__retweet-count">
          <AutorenewIcon
            width={"18px"}
            style={{
              fill: tweet.type === "retweet" ? "green" : "",
            }}
          />{" "}
          {tweet.retweetCount}
        </span>
      </DropDown>
    </>
  );
};

export default RetweetCount;
