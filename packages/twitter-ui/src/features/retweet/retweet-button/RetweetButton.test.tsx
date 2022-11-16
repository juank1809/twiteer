import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customTweetContextRender } from "../../../utils/test-utils";
import { TweetsFeed } from "../../tweet-feed";

it("should retweet without text", async () => {
  customTweetContextRender(
    <>
      <TweetsFeed />
    </>
  );

  // Find the first tweet, get and the retweet button of that tweet.
  const tweetButton = screen.getAllByTitle(/retweet/i)[0];
  userEvent.click(tweetButton);

  // Select retweet without quote option
  const tweetWithoutQuoteOption = await screen.findByText(/retweet/i);
  userEvent.click(tweetWithoutQuoteOption);

  expect(screen.getAllByTestId("tweet")).toHaveLength(4);
  expect(screen.getByText(/you retweeted/i)).toBeInTheDocument();
});
