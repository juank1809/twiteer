import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ITweet } from "../../../types/tweet";
import {
  customTweetContextRender,
  dummyTweet,
} from "../../../utils/test-utils";
import RetweetOptionsMenu from "./RetweetOptionsMenu";

it("should retweet without text", async () => {
  let tweetsFeed = [dummyTweet];

  const addRetweetImplementation = (tweet: ITweet) => {
    tweetsFeed = [{ ...tweet, type: "retweet" }, ...tweetsFeed];
  };

  const providerProps = {
    addRetweet: jest.fn(addRetweetImplementation),
  };

  customTweetContextRender(<RetweetOptionsMenu tweet={dummyTweet} />, {
    providerProps: providerProps,
  });

  const retweetButton = await screen.findByText(/retweet/i);

  userEvent.click(retweetButton);

  expect(providerProps.addRetweet).toHaveBeenCalled();
  expect(providerProps.addRetweet).toHaveBeenCalledWith(dummyTweet);
  expect(tweetsFeed[0].type).toBe("retweet");
});
