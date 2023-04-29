"use client";

import React, { useState } from "react";
import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";
import getUserInitials from "../../../utils/getUserInitials";
import { Button } from "../../../components/Button";
import { TweetPreview } from "../../tweet";
import { TextArea } from "../../../components/TextArea";
import { UserImage } from "../../../components/UserImage";
import { newTweetMarkup } from "../../new-tweet/NewTweetForm";

interface RetweetFormProps {
  tweet: ITweet;
}
const RetweetForm: React.FC<RetweetFormProps> = ({ tweet }) => {
  const [retweetText, setRetweetText] = useState("");
  const { addRetweet } = useTweets();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRetweetText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRetweet({
      ...tweet,
      retweet: retweetText,
    });
    setRetweetText("");
  };

  return (
    <div className="new-tweet-form__main-container">
      <UserImage size="large">
        {getUserInitials(newTweetMarkup.user.fullName)}
      </UserImage>
      <form className="new-tweet-form__form-container" onSubmit={handleSubmit}>
        <TextArea
          name="new-tweet-form"
          value={retweetText}
          minRows={1}
          label="Add a comment"
          handleChange={handleChange}
        />
        <TweetPreview tweet={tweet} />
        <Button
          type="submit"
          buttonType="primary"
          style={{ alignSelf: "flex-end" }}
        >
          Tweet{" "}
        </Button>
      </form>
    </div>
  );
};

export default RetweetForm;
