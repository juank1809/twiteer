import { screen } from "@testing-library/react";
import { tweetsData } from "../../../tweetsData";
import { customTweetContextRender } from "../../../utils/test-utils";
import RetweetOptionsMenu from "./RetweetOptionsMenu";

it("should retweet without text", async () => {
  customTweetContextRender(<RetweetOptionsMenu tweet={tweetsData[0]} />);

  expect(screen.getByText(/retweet/i)).toBeInTheDocument();
  expect(screen.getByText(/quote tweet/i)).toBeInTheDocument();
});
