import { render, screen, cleanup, waitFor } from "@testing-library/react";
import TweetsFeed from "../TweetsFeed/TweetsFeed";
import user from "@testing-library/user-event";
import { TweetContextProvider } from "../../context/TweetContext";

afterEach(cleanup);

export function renderTweetsFeed() {
  return render(
    <TweetContextProvider>
      <TweetsFeed />
    </TweetContextProvider>
  );
}

test("should render a list of tweets", () => {
  renderTweetsFeed();
  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(3);
});

test("should retweet a tweet, then a new tweet from text box", () => {
  renderTweetsFeed();

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

test("should aument and decrease favorite count of a tweet", async () => {
  renderTweetsFeed();

  const toFavorite = screen.getAllByTitle(/favorite count/)[0];

  user.click(toFavorite);

  expect(toFavorite.textContent).toMatch(/4/);

  user.click(toFavorite);

  await waitFor(() => expect(toFavorite.textContent).toMatch(/3/));
});
