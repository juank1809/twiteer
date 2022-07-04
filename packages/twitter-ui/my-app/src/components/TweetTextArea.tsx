import React from "react";
import IUser from "../types/user";
import getUserInitials from "./utils/getUserInitials";
import { useState } from "react";
import useHandleNewTweet from "../hooks/useHandleNewTweet";
import { TweetProps } from "./Tweet";
interface TweetTextAreaProps extends Omit<TweetProps, "tweet"> {}

// Given the situation that we currently do not have a user authentication system, we will just use hardcoded user
const user: IUser = {
  fullName: "Christopher Francisco",
  username: "@christopher",
};

const TweetTextArea: React.FC<TweetTextAreaProps> = ({ tweets, setTweets }) => {
  const [tweetText, setTweetText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(e.target.value);
  };

  const cleanAfterTweet = () => {
    setTweetText("");
  };

  const { handleNewTweet } = useHandleNewTweet(
    {
      user,
      favoriteCount: 0,
      retweetCount: 0,
      isAlreadyFavorite: false,
      isAlreadyRetweeted: false,
      id: tweets.length + 1,
      message: tweetText,
      replyCount: 0,
    },
    tweets,
    setTweets
  );

  return (
    <div className="tweet-text-area">
      <div className="tweet-text-area__main-container">
        <figure> {getUserInitials(user.fullName)} </figure>
        <form
          className="tweet-text-area__form-container"
          onSubmit={(e) => {
            cleanAfterTweet();
            handleNewTweet(e);
          }}
        >
          <textarea
            className="tweet-text-area__text-box"
            name="tweet-text-area"
            value={tweetText}
            onChange={handleChange}
            id="tweet-text-area"
            rows={3}
            cols={40}
          />
          <label
            className="tweet-text-area__text-box__label"
            htmlFor="tweet-text-area"
          >
            What are you thinking today?
          </label>
          <button type="submit" className="primary-button">
            Tweet
          </button>
        </form>
      </div>
    </div>
  );
};

export default TweetTextArea;
