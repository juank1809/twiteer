import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { TweetContext, TweetContextValues } from "../context/TweetContext";
import { ITweet } from "../types/tweet";

interface CustomRenderTweetOptions {
  providerProps?: Partial<TweetContextValues>;
  renderOptions?: RenderOptions;
}

export const customTweetContextRender = (
  ui: React.ReactElement,
  { providerProps, renderOptions }: CustomRenderTweetOptions = {}
) => {
  return render(
    <TweetContext.Provider value={providerProps as TweetContextValues}>
      {ui}
    </TweetContext.Provider>,
    renderOptions
  );
};

export const dummyTweet: ITweet = {
  id: 1,
  favoriteCount: 0,
  retweetCount: 0,
  replyCount: 0,
  message: "This is a dummy tweet",
  type: "default",
  user: {
    username: "@christopher",
    fullName: "Christopher Francisco",
  },
};
