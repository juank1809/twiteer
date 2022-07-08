import React from "react";
import getUserInitials from "../../utils/getUserInitials";
import { useState } from "react";
import { useTweets } from "../../hooks/useTweets";

const newTweetMarkup = {
  user: {
    fullName: "Christopher Francisco",
    username: "@christopher",
  },
  favoriteCount: 0,
  retweetCount: 0,
  replyCount: 0,
  type: "default",
} as const;

const TweetTextArea: React.FC = () => {
  const [tweetText, setTweetText] = useState("");
  const { tweets, addTweet } = useTweets();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTweet({
      ...newTweetMarkup,
      id: tweets.length + 1,
      message: tweetText,
    });
    cleanAfterTweet();
  };

  const cleanAfterTweet = () => {
    setTweetText("");
  };

  return (
    <div className="tweet-text-area">
      <div className="tweet-text-area__main-container">
        <figure> {getUserInitials(newTweetMarkup.user.fullName)} </figure>
        <form
          className="tweet-text-area__form-container"
          onSubmit={handleSubmit}
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
