import React, { useState } from "react";
import { useTweets } from "../../hooks/useTweets";
import { ITweet } from "../../types/tweet";
import getUserInitials from "../../utils/getUserInitials";
import { Button } from "../Button";
import { TweetPreview } from "../Tweet";
import TweetTextArea from "../TweetTextArea";
import { UserImage } from "../UserImage";
import { newTweetMarkup } from "./NewTweetForm";

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
    if (retweetText) {
      addRetweet({
        ...tweet,
        retweet: retweetText,
      });
      return;
    }
    addRetweet(tweet);
  };

  return (
    <div className="new-tweet-form__main-container">
      <UserImage size="large">
        {getUserInitials(newTweetMarkup.user.fullName)}
      </UserImage>
      <form className="new-tweet-form__form-container" onSubmit={handleSubmit}>
        <TweetTextArea
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
