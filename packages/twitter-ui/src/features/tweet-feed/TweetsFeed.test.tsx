import { screen } from "@testing-library/react";
import TweetsFeed from "./TweetsFeed";
import { customTweetContextRender } from "../../utils/test-utils";

test("should render a list of tweets", () => {
  customTweetContextRender(<TweetsFeed />);
  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(3);
});
