import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  customTweetContextRender,
  dummyTweet,
} from "../../../utils/test-utils";
import FavoriteButton from "./FavoriteButton";

it("should call increment favorite and decrement favorite", async () => {
  const incrementFavoriteImplementation = (id: number) => {
    const toIncrement = [dummyTweet].find((tweet) => tweet.id === id);
    if (toIncrement) toIncrement.favoriteCount++;
  };

  const decrementFavoriteImplementation = (id: number) => {
    const toDecrement = [dummyTweet].find((tweet) => tweet.id === id);
    if (toDecrement) toDecrement.favoriteCount--;
  };

  const providerProps = {
    incrementFavorite: jest.fn(incrementFavoriteImplementation),
    decrementFavorite: jest.fn(decrementFavoriteImplementation),
  };

  customTweetContextRender(<FavoriteButton tweet={dummyTweet} />, {
    providerProps: providerProps,
  });

  const favoriteButton = screen.getByTitle(/favorite count/i);

  userEvent.click(favoriteButton);

  expect(providerProps.incrementFavorite).toHaveBeenCalled();
  expect(providerProps.incrementFavorite).toHaveBeenCalledWith(dummyTweet.id);

  userEvent.click(favoriteButton);

  expect(providerProps.incrementFavorite).toHaveBeenCalledWith(dummyTweet.id);
  expect(providerProps.decrementFavorite).toHaveBeenCalled();
});
