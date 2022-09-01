import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ITweet } from "../../../types/tweet";
import {
  customTweetContextRender,
  dummyTweet as tweetToRetweet,
} from "../../../utils/test-utils";
import RetweetForm from "./RetweetForm";

it("should retweet with text", () => {
  let tweetsFeed: ITweet[] = [];

  const addRetweetWithQuoteImplementation = (tweet: ITweet) => {
    tweetsFeed = [
      { ...tweet, type: "retweet", retweet: "I'm quoting a retweet" },
      ...tweetsFeed,
    ];
  };

  const providerProps = {
    addRetweet: jest.fn(addRetweetWithQuoteImplementation),
  };

  customTweetContextRender(<RetweetForm tweet={tweetToRetweet} />, {
    providerProps: providerProps,
  });

  const retweetButton = screen.getByRole("button", {
    name: /tweet/i,
  });

  userEvent.click(retweetButton);

  expect(providerProps.addRetweet).toHaveBeenCalled();
  expect(providerProps.addRetweet).toHaveBeenCalledWith(tweetToRetweet);
  expect(tweetsFeed[0].type).toBe("retweet");
  expect(tweetsFeed[0].retweet).toBeTruthy();
});
