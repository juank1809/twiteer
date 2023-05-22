import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { tweetsData } from "../../../tweetsData";
import { customTweetContextRender } from "../../../utils/test-utils";
import { TweetsFeed } from "../../tweet-feed";
import RetweetForm from "./RetweetForm";

it("should retweet with text", async () => {
  customTweetContextRender(
    <>
      <RetweetForm tweet={tweetsData[0]} />
      <TweetsFeed />
    </>
  );

  const RETWEET_QUOTE = "I'm quoting this retweet";

  const form = screen.getByPlaceholderText(/add a comment/i);
  await userEvent.type(form, RETWEET_QUOTE);

  const retweetButton = screen.getByRole("button", {
    name: /tweet/i,
  });

  await userEvent.click(retweetButton);

  const tweetsFeed = screen.getAllByTestId("tweet");

  expect(tweetsFeed).toHaveLength(4);
  expect(screen.getByText(RETWEET_QUOTE)).toBeInTheDocument();
});