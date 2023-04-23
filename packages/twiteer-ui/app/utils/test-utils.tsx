import React from "react";
import { render } from "@testing-library/react";
import { TweetContextProvider } from "../context/TweetContext";

export const customTweetContextRender = (ui: React.ReactElement) => {
  return render(<TweetContextProvider>{ui}</TweetContextProvider>);
};
