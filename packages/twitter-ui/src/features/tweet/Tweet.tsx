import React from "react";
import { ITweet } from "../../types/tweet";
import getUserInitials from "../../utils/getUserInitials";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { RetweetButton } from "../retweet/retweet-button";
import { FavoriteButton } from "./favorite-button";
import { UserImage } from "../../components/UserImage";
import { TweetPreview } from "./preview";

export interface TweetProps {
  tweet: ITweet;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { id, favoriteCount, message, replyCount, user, type, retweet } = tweet;

  return (
    <div data-testid="tweet" className="tweet">
      <div className="tweet__main-container">
        {type === "retweet" && !retweet && (
          <>
            <AutorenewIcon className="tweet__retweet-message-icon" />
            <span className="tweet__retweet-message">You Retweeted</span>
          </>
        )}
        <UserImage size="large"> {getUserInitials(user.fullName)} </UserImage>
        <div>
          <div className="tweet__user-container">
            <h2 className="tweet__full-name"> {user.fullName} </h2>
            <span className="tweet__username"> {user.username} </span>
          </div>

          <div className="tweet__message"> {retweet ? retweet : message} </div>
          {type === "retweet" && retweet && (
            <TweetPreview tweet={tweet}></TweetPreview>
          )}
          <div className="tweet__count-container">
            <span title="reply count" className="tweet__reply-count">
              <ModeCommentOutlinedIcon width={"16px"} /> {replyCount}
            </span>
            <RetweetButton tweet={tweet} />
            <FavoriteButton id={id} favoriteCount={favoriteCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
