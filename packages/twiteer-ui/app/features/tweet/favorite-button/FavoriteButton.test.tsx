import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { tweetsData } from "../../../tweetsData";
import { customTweetContextRender } from "../../../utils/test-utils";
import FavoriteButton from "./FavoriteButton";

it("should call increment favorite and decrement favorite", async () => {
  customTweetContextRender(<FavoriteButton tweet={tweetsData[0]} />);

  const favoriteButton = screen.getByTitle(/favorite count/i);

  userEvent.click(favoriteButton);

  expect(screen.getByTitle(/favorite count/i)).toHaveTextContent("3");
});
