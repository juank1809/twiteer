import { render, screen, cleanup } from "@testing-library/react";
import TweetsFeed from "../TweetsFeed";
import user from "@testing-library/user-event";

afterEach(cleanup);

test("should render a list of tweets", () => {
  render(<TweetsFeed />);
  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(3);
});

test("should retweet a tweet, then a new tweet from text box", () => {
  render(<TweetsFeed />);

  const toRetweet = screen.getAllByTitle(/retweet count/)[0];

  user.click(toRetweet);

  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(4);

  const textArea = screen.getByLabelText(/What are you thinking today/);
  const button = screen.getByRole("button", {
    name: /tweet/i,
  });

  user.type(textArea, "My first tweet");
  user.click(button);

  expect(tweets).toHaveLength(4);
});
