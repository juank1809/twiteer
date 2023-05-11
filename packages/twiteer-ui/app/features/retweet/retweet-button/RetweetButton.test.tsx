import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customTweetContextRender } from "../../../utils/test-utils";
import { TweetsFeed } from "../../tweet-feed";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { tweetsData } from "../../../tweetsData";

const firstTweet = tweetsData[0];

// It should be add a retweet to array
const newTweetsData = [{ ...firstTweet, type: "retweet" }, ...tweetsData];
console.log(newTweetsData.length);

const handlers = [
  rest.get(`${process.env.API_URL}/tweets`, (_req, res, ctx) => {
    return res(ctx.json(tweetsData));
  }),
  rest.post(`${process.env.API_URL}/tweets/retweet`, (_req, res, ctx) => {
    return res(ctx.json(newTweetsData));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should retweet without text", async () => {
  customTweetContextRender(<TweetsFeed />);

  // Find the first tweet, get and the retweet button of that tweet.
  const findRetweetButton = await screen.findAllByTitle(/retweet/i);
  const retweetButton = findRetweetButton[0];
  await userEvent.click(retweetButton);

  // Select retweet without quote option
  const tweetWithoutQuoteOption = await screen.findByText(/retweet/i);
  await userEvent.click(tweetWithoutQuoteOption);

  expect(await screen.findAllByTestId("tweet")).toHaveLength(4);
  expect(screen.getByText(/you retweeted/i)).toBeInTheDocument();
});
