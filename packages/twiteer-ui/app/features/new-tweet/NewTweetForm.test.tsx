import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTweetForm from "./NewTweetForm";
import { customTweetContextRender } from "../../utils/test-utils";
import { TweetsFeed } from "../tweet-feed";

test("should add a tweet from textbox", async () => {
  const user = userEvent.setup();

  customTweetContextRender(
    <>
      <NewTweetForm />
      <TweetsFeed />
    </>
  );

  const textArea = screen.getByPlaceholderText(/what are you thinking today?/i);
  const button = screen.getByRole("button", {
    name: /tweet/i,
  });

  await user.type(textArea, "New tweet from textbox");
  await user.click(button);

  const tweetsFeed = screen.getAllByTestId("tweet");
  expect(tweetsFeed).toHaveLength(4);
});
