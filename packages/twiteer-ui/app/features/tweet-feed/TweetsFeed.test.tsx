import { screen } from "@testing-library/react";
import TweetsFeed from "./TweetsFeed";
import { customTweetContextRender } from "../../utils/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { tweetsData } from "@/app/tweetsData";

const server = setupServer(
  rest.get(`${process.env.API_URL}/tweets`, (_req, res, ctx) => {
    return res(ctx.json(tweetsData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should render a list of tweets", async () => {
  customTweetContextRender(<TweetsFeed />);

  const tweets = await screen.findAllByTestId("tweet");
  screen.debug();
  expect(tweets).toHaveLength(3);
});
