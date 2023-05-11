"use client";

import React from "react";
import { ITweet } from "../../types/tweet";

import { RetweetButton } from "../retweet/retweet-button";
import { FavoriteButton } from "./favorite-button";
import { UserImage } from "../../components/UserImage";
import { TweetPreview } from "./preview";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";

export interface TweetProps {
  tweet: ITweet;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { message, replyCount, user, type, retweetQuote } = tweet;

  return (
    <div
      data-testid="tweet"
      className="bg-black border-b-[1px] w-full border-solid border-black-gray py-3 sm:px-1 md:px-4 sm:w-2/4 hover:bg-neutral-900 cursor-pointer"
    >
      <div className="">
        {/* If the type is retweet but is does not has a retweet quote just display a "You retweeted message" to make sure to communicate that is a retweet ! */}

        {type === "retweet" && !retweetQuote && (
          <>
            <button className="tweet__retweet-message-icon">Hello</button>
            <span className="tweet__retweet-message">You Retweeted</span>
          </>
        )}
        <div className="flex flex-row gap-3">
          <UserImage />
          <div className="flex flex-col w-full gap-1.5">
            <div className="flex gap-2 items-center">
              <h2 className="text-white text-base font-bold">
                {user.fullName}
              </h2>
              <span className="text-gray text-xs"> {user.username} </span>
            </div>

            <div className="text-white text-xs font-normal mb-2 ">
              {/* If the tweet is a retweet with a quote, display the quote! */}
              {retweetQuote ?? message}{" "}
            </div>
            {/* If the tweet is a retweet with a quote, display the tweet that is quoted from! */}
            {type === "retweet" && retweetQuote && (
              <TweetPreview tweet={tweet} />
            )}
            <div className="flex justify-between w-3/4">
              <span
                title="comment count"
                className="flex text-gray items-center text-xs gap-1 cursor-pointer"
              >
                <MdOutlineModeComment className="fill-gray w-5 h-5" />
                {replyCount}
              </span>
              <RetweetButton tweet={tweet} />
              <FavoriteButton tweet={tweet} />
              <span
                title="reply count"
                className="flex text-gray items-center text-xs gap-1 cursor-pointer"
              >
                <FiShare className=" w-5 h-5" />
                {replyCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
