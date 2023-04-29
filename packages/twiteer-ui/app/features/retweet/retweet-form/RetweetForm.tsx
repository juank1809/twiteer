"use client";

import React, { useState } from "react";
import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";
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
    <div className="bg-black flex gap-5 overflow-hidden w-full">
      <UserImage />
      <div className="w-full">
        <form
          className="relative flex flex-col self-stretch justify-self-stretch place-self-stretch w-full"
          onSubmit={handleSubmit}
        >
          <TextArea
            name="new-tweet-form"
            value={retweetText}
            minRows={1}
            placeholder="Add a comment"
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
    </div>
  );
};

export default RetweetForm;
