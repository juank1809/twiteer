"use client";

import React from "react";
import type { TweetProps } from "../../tweet/Tweet";
import DropDown from "rc-dropdown";
import RetweetOptionsMenu from "../retweet-menu/RetweetOptionsMenu";
import { AiOutlineRetweet } from "react-icons/ai";

const RetweetCount: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <>
      <DropDown
        overlayClassName=""
        trigger={["click"]}
        placement={"bottomRight"}
        overlay={<RetweetOptionsMenu tweet={tweet} />}
      >
        <span
          title="retweet count"
          className="flex text-gray items-center text-xs gap-1 cursor-pointer"
        >
          <AiOutlineRetweet
            className={`
            ${
              tweet.type === "retweet" ? "fill-green-500" : "fill-gray"
            } w-5 h-5`}
          />{" "}
          {tweet.retweetCount}
        </span>
      </DropDown>
    </>
  );
};

export default RetweetCount;
