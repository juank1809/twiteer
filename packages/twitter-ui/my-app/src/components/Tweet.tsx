import React, { useState } from "react";
import { ITweet } from "../types/tweet";
import getUserInitials from "./utils/getUserInitials";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";

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

    const calculateNewFavoriteCount = hasAlreadyBeenFavorited ? -1 : 1;
    setNewFavoriteCount((prev) => prev + calculateNewFavoriteCount);
  };
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
            <span title="retweet count" className="tweet__retweet-count">
              <AutorenewIcon width={"18px"} /> {retweetCount}
            </span>
            <span
              title="favorite count"
              onClick={handleFavoriteClick()}
              className="tweet__favorite-count"
            >
              <FavoriteBorderOutlinedIcon
                style={{
                  fill: hasAlreadyBeenFavorited ? "red" : "",
                }}
                width={"18px"}
              />
              {newFavoriteCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
