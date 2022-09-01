import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTweetForm from "./NewTweetForm";
import { customTweetContextRender } from "../../utils/test-utils";
import { ITweet } from "../../types/tweet";

test("should add a tweet from textbox", async () => {
  let tweetsFeed: ITweet[] = [];

  const addTweetImplementation = (tweet: ITweet) => {
    tweetsFeed = [tweet, ...tweetsFeed];
  };

  const providerProps = {
    tweets: tweetsFeed,
    addTweet: jest.fn(addTweetImplementation),
  };

  customTweetContextRender(<NewTweetForm />, {
    providerProps,
  });

  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  const button = screen.getByRole("button", {
    name: /tweet/i,
  });

  userEvent.type(textArea, "New tweet from textbox");
  userEvent.click(button);

  expect(tweetsFeed).toHaveLength(1);
  expect(providerProps.addTweet).toHaveBeenCalled();
});
