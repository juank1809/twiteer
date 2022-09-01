import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  customTweetContextRender,
  dummyTweet,
} from "../../../utils/test-utils";
import RetweetButton from "./RetweetButton";

it("should open Tweet Menu", async () => {
  /* all the props here are dummy objects */
  customTweetContextRender(<RetweetButton tweet={dummyTweet} />, {
    providerProps: { addRetweet: jest.fn() },
  });

  const tweetButton = screen.getByTitle(/retweet/i);

  userEvent.click(tweetButton);

  const retweetWithoutQuoteOption = await screen.findByText(/retweet/i);

  userEvent.click(retweetWithoutQuoteOption);

  expect(screen.getByText(/retweet/i)).toBeInTheDocument();
  expect(screen.getByText(/quote tweet/i)).toBeInTheDocument();
});
