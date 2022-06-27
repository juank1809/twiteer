import { render, screen } from "@testing-library/react";
import TweetsFeed from "../TweetsFeed";
import user from "@testing-library/user-event";
import TweetTextArea from "../TweetTextArea";

test("should render a list of tweets", () => {
  render(<TweetsFeed />);
  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(3);
});

test("should retweet a tweet", () => {
  render(<TweetsFeed />);

  const toRetweet = screen.getAllByTitle(/retweet count/)[0];

  user.click(toRetweet);

  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(4);
});

test("should update feed of tweets", () => {
  render(<TweetTextArea />);
  const textArea = screen.getByLabelText(/tweet/);
  const button = screen.getByText(/tweet/);
  user.type(textArea, "My first tweet");
  user.click(button);

  render(<TweetsFeed />);
  const tweets = screen.getAllByTestId("tweet");
  expect(tweets).toHaveLength(4);
});
