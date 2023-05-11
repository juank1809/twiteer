import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { tweetsData } from "../../../tweetsData";
import { customTweetContextRender } from "../../../utils/test-utils";
import FavoriteButton from "./FavoriteButton";
import { rest } from "msw";
import { setupServer } from "msw/node";

// Get the first tweet
const firstTweet = tweetsData[0];

// Create a mock for our HTTP response, in this mock the favorite count of the first tweet
// will increment by one
const newTweetsData = [
  { ...firstTweet, favoriteCount: firstTweet.favoriteCount + 1 },
  ...tweetsData.slice(1),
];

const server = setupServer(
  rest.put(
    `${process.env.API_URL}/tweets/favorite/${firstTweet.id}`,
    (_req, res, ctx) => {
      return res(ctx.json(newTweetsData));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should call increment favorite and decrement favorite", async () => {
  customTweetContextRender(<FavoriteButton tweet={firstTweet} />);

  const favoriteButton = await screen.findByTitle(/favorite count/i);

  await userEvent.click(favoriteButton);

  expect(screen.findByTitle(/favorite count/i)).toHaveTextContent("3");
});
