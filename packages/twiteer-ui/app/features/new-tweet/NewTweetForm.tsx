"use client";

import React from "react";
import { useState } from "react";
import { useTweets } from "../../context/TweetContext";
import { UserImage } from "../../components/UserImage";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

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
    <div className="w-full sm:w-2/4 bg-black">
      <div className="pt-5 pr-3 pb-3 pl-4 flex gap-4">
        <UserImage size="medium" />
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
          <TextArea
            name="new-tweet-form"
            value={tweetText}
            placeholder="What are you thinking today?"
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
