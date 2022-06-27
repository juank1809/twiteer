import React, { useState } from "react";
import { ITweet } from "../types/tweet";
import getUserInitials from "./utils/getUserInitials";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import RetweetCount from "./TweetCounts/RetweetCount/RetweetCount";
import FavoriteCount from "./TweetCounts/FavoriteCount/FavoriteCount";

export interface TweetProps {
  tweet: ITweet;
  tweets: ITweet[];
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>;
}

const Tweet: React.FC<TweetProps> = ({
  tweet: currentTweet,
  tweets,
  setTweets,
}) => {
  const { favoriteCount, message, replyCount, retweetCount, user } =
    currentTweet;

  return (
    <div data-testid="tweet" className="tweet">
      <div className="tweet__main-container">
        <figure> {getUserInitials(user.fullName)} </figure>
        <div>
          <div className="tweet__user-container">
            <h2 className="tweet__full-name"> {user.fullName} </h2>
            <span className="tweet__username"> {user.username} </span>
          </div>

          <div className="tweet__message"> {message} </div>

          <div className="tweet__count-container">
            <span title="reply count" className="tweet__reply-count">
              <ModeCommentOutlinedIcon width={"16px"} /> {replyCount}
            </span>
            <RetweetCount
              tweet={currentTweet}
              tweets={tweets}
              setTweets={setTweets}
            />
            <FavoriteCount
              tweet={currentTweet}
              tweets={tweets}
              setTweets={setTweets}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
