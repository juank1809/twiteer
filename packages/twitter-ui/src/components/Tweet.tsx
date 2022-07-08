import React from "react";
import { ITweet } from "../types/tweet";
import getUserInitials from "./utils/getUserInitials";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RetweetCount from "./TweetCounts/RetweetCount/RetweetCount";
import FavoriteCount from "./TweetCounts/FavoriteCount/FavoriteCount";

export interface TweetProps {
  tweet: ITweet;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { message, replyCount, user, type } = tweet;

  return (
    <div data-testid="tweet" className="tweet">
      <div className="tweet__main-container">
        {type === "retweet" && (
          <>
            <AutorenewIcon className="tweet__retweet-message-icon" />
            <span className="tweet__retweet-message">You Retweeted</span>
          </>
        )}
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
            <RetweetCount tweet={tweet} />
            <FavoriteCount tweet={tweet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
