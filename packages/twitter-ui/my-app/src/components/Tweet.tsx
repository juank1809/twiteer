import React, { useState } from "react";
import { ITweet } from "../types/tweet";
import getUserInitials from "./utils/getUserInitials";
import "normalize.css";

export interface TweetProps extends ITweet {}

const Tweet: React.FC<TweetProps> = ({
  user,
  favoriteCount,
  message,
  replyCount,
  retweetCount,
}) => {
  const [hasAlreadyBeenFavorited, setHasAlreadyBeenFavorited] =
    useState<boolean>(false);
  const [newFavoriteCount, setNewFavoriteCount] = useState(favoriteCount);

  const handleFavoriteClick = () => () => {
    setHasAlreadyBeenFavorited((prev) => !prev);

    const calculateNewFavoriteCount = hasAlreadyBeenFavorited ? -1 : -1;
    setNewFavoriteCount((prev) => prev + calculateNewFavoriteCount);
  };
  return (
    <div data-testid="tweet" className="tweet">
      <div className="tweet__user-container">
        <figure> {getUserInitials(user.fullName)} </figure>

        <h2 className="tweet__full-name"> {user.fullName} </h2>
        <span className="tweet__username"> {user.username} </span>
      </div>

      <div className="tweet__message"> {message} </div>
      <div className="tweet__count-container">
        <span title="reply count" className="tweet__reply-count">
          {replyCount}
        </span>
        <span title="retweet count" className="tweet__retweet-count">
          {retweetCount}
        </span>
        <span
          onClick={handleFavoriteClick()}
          title="favorite count"
          className="tweet__favorite-count"
        >
          {newFavoriteCount}
        </span>
      </div>
    </div>
  );
};

export default Tweet;
