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

const server = setupServer(
  rest.get(`${process.env.API_URL}/tweets`, (_req, res, ctx) => {
    return res(ctx.json(tweetsData));
  }),
  rest.post(`${process.env.API_URL}/tweets/favorite/:id`, (req, res, ctx) => {
    return res(ctx.json({ message: "Tweet favourited", success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should call increment favorite and decrement favorite", async () => {
  customTweetContextRender(<FavoriteButton tweet={firstTweet} />);

  const favoriteButton = await screen.findByTitle(/favorite count/i);

  await userEvent.click(favoriteButton);

  screen.debug(favoriteButton);

  expect(await screen.findByTitle(/favorite count/i)).toHaveTextContent("4");
});
