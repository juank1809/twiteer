import { screen } from "@testing-library/react";
import TweetsFeed from "./TweetsFeed";
import { customTweetContextRender, dummyTweet } from "../../utils/test-utils";

test("should render a list of tweets", () => {
  customTweetContextRender(<TweetsFeed />, {
    providerProps: { tweets: Array(3).fill(dummyTweet) },
  });
  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(3);
});
