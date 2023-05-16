"use client";

import React, { useEffect, useRef, useState } from "react";
import type { TweetProps } from "../../tweet/Tweet";
import DropDown from "rc-dropdown";
import RetweetOptionsMenu from "../retweet-menu/RetweetOptionsMenu";
import { AiOutlineRetweet } from "react-icons/ai";

const RetweetCount: React.FC<TweetProps> = ({ tweet }) => {
  const {
    isAlreadyRetweet: isFirstAlreadyRetweet,
    retweetCount: firstRetweetCount,
    type,
  } = tweet;
  const [isAlreadyRetweet, setIsAlreadyRetweet] = useState(
    isFirstAlreadyRetweet
  );
  const [retweetCount, setRetweetCount] = useState(firstRetweetCount);

  const initialRender = useRef(true);

  //Update retweets's count every time the user updates if this is them favorite tweet
  useEffect(() => {
    // This should not be fired at the first render

    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const shouldIncrement = isAlreadyRetweet;
    setRetweetCount((prev) => {
      return shouldIncrement ? prev + 1 : prev - 1;
    });
  }, [isAlreadyRetweet]);

  const handleIncrement = () => {
    setIsAlreadyRetweet((prev) => !prev);
  };

  return (
    <>
      <DropDown
        overlayClassName=""
        trigger={["click"]}
        placement={"bottomRight"}
        overlay={
          <RetweetOptionsMenu handleIncrement={handleIncrement} tweet={tweet} />
        }
      >
        <span
          title="retweet count"
          className="flex text-gray items-center text-xs gap-1 cursor-pointer"
        >
          <AiOutlineRetweet
            className={`
            ${type === "retweet" ? "fill-green-500" : "fill-gray"} w-5 h-5`}
          />{" "}
          {retweetCount}
        </span>
      </DropDown>
    </>
  );
};

export default RetweetCount;
