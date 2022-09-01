import { screen } from "@testing-library/react";
import Tweet from "./Tweet";
import { customTweetContextRender, dummyTweet } from "../../utils/test-utils";
import getUserInitials from "../../utils/getUserInitials";

it("should render a tweet with mock data", () => {
  customTweetContextRender(<Tweet tweet={dummyTweet} />, {
    providerProps: { tweets: [] },
  });
  //counts
  expect(screen.getByTitle(/favorite count/)).toBeInTheDocument();
  expect(screen.getByTitle(/reply count/)).toBeInTheDocument();
  expect(screen.getByTitle(/retweet count/)).toBeInTheDocument();

  //user info
  expect(screen.getByText(dummyTweet.user.username)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

  expect(screen.getByText(dummyTweet.message)).toBeInTheDocument();

  //This acts as our user image for now.
  expect(screen.getByRole("figure")).toBeInTheDocument();

  expect(
    screen.getByText(getUserInitials(dummyTweet.user.fullName))
  ).toBeInTheDocument();
});
