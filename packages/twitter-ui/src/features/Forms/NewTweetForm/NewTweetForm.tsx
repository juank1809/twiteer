import React from "react";
import getUserInitials from "../../../utils/getUserInitials";
import { useState } from "react";
import { useTweets } from "../../../context/TweetContext";
import { UserImage } from "../../../components/UserImage";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";

export const newTweetMarkup = {
  user: {
    fullName: "Christopher Francisco",
    username: "@christopher",
  },
  favoriteCount: 0,
  retweetCount: 0,
  replyCount: 0,
  type: "default",
} as const;

const NewTweetForm: React.FC = () => {
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
    <div className="new-tweet-form">
      <div className="new-tweet-form__main-container">
        <UserImage size="medium">
          {getUserInitials(newTweetMarkup.user.fullName)}
        </UserImage>
        <form
          className="new-tweet-form__form-container"
          onSubmit={handleSubmit}
        >
          <TextArea
            name="new-tweet-form"
            value={tweetText}
            label="What are you thinking today?"
            handleChange={handleChange}
          />
          <br />
          <Button
            buttonType="primary"
            type="submit"
            style={{ alignSelf: "flex-end" }}
          >
            Tweet{" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewTweetForm;
