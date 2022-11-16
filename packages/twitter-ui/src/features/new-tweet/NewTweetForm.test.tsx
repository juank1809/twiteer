import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTweetForm from "./NewTweetForm";
import { customTweetContextRender } from "../../utils/test-utils";
import { TweetsFeed } from "../tweet-feed";

test("should add a tweet from textbox", async () => {
  customTweetContextRender(
    <>
      <NewTweetForm />
      <TweetsFeed />
    </>
  );

  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  const button = screen.getByRole("button", {
    name: /tweet/i,
  });

  userEvent.type(textArea, "New tweet from textbox");
  userEvent.click(button);

  const tweetsFeed = screen.getAllByTestId("tweet");
  expect(tweetsFeed).toHaveLength(4);
});
