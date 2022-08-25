import React from "react";
import getUserInitials from "../../../utils/getUserInitials";
import { UserImage } from "../../../components/UserImage";
import type { TweetProps } from "../Tweet";

const TweetPreview: React.FC<TweetProps> = ({ tweet: { user, message } }) => {
  return (
    <div className="tweet-preview">
      <div className="tweet-preview__user-container">
        <UserImage size={"small"}> {getUserInitials(user.fullName)} </UserImage>
        <div className="tweet-preview__full-name"> {user.fullName} </div>
        <span className="tweet-preview__username"> {user.username} </span>
      </div>
      <div className="tweet-preview__message"> {message} </div>
    </div>
  );
};

export default TweetPreview;
