import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import {
  TweetContextProvider,
  TweetContextValues,
} from "../context/TweetContext";

export const customTweetContextRender = (ui: React.ReactElement) => {
  return render(<TweetContextProvider>{ui}</TweetContextProvider>);
};
