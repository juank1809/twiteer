import path from "path";
import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import createApiInstance, * as api from "./api";
import { tweetsData } from "./tweetsData";

const { eachLike } = MatchersV3;

const provider = new PactV3({
  consumer: "twitter-consumer",
  provider: "mock-provider",
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "pact"),
});

const suitor = {
  id: 1,
  user: {
    fullName: "Christoper Francisco",
    username: "@christopher",
  },
  message: "I like surfing",
  favoriteCount: 3,
  replyCount: 2,
  retweetCount: 1,
  type: "default",
};

const postTweetExpectation = eachLike(suitor);

describe("Tweet Mock Service API Test", () => {
  describe("getting all tweets", () => {
    test("tweets exists", async () => {
      await provider.addInteraction({
        states: [{ description: "tweets exist" }],
        uponReceiving: "get all tweets",
        withRequest: {
          method: "GET",
          path: "/tweets",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: postTweetExpectation,
        },
      });

      await provider.executeTest(async (mockService) => {
        const api = createApiInstance(mockService.url);

        const tweets = await api.getAllTweets();

        expect(tweets).toStrictEqual([suitor]);
      });
    });
  });

  describe("post one tweet", () => {
    test("posting does not throw an error", async () => {
      await provider.addInteraction({
        states: [{ description: "post tweet" }],
        uponReceiving: "post one tweet",
        withRequest: {
          method: "POST",
          path: "/tweets",
          body: {
            tweet: suitor,
          },
          headers: {
            "Content-Type": "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: postTweetExpectation,
        },
      });

      const tweetToPost = tweetsData[0];

      await provider.executeTest(async (mockService) => {
        const api = createApiInstance(mockService.url);

        await expect(api.postTweet(tweetToPost)).resolves.toBeTruthy();
      });
    });
  });
  describe("retweet one tweet", () => {
    test("retweets is succesful", async () => {
      await provider.addInteraction({
        states: [{ description: "retweet tweet" }],
        uponReceiving: "retweet one tweet",
        withRequest: {
          method: "POST",
          path: "/tweets/retweet/1",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: true,
        },
      });

      const tweetToRetweet = tweetsData[0];

      await provider.executeTest(async (mockService) => {
        const api = createApiInstance(mockService.url);

        await expect(
          api.retweetTweet(tweetToRetweet.id)
        ).resolves.not.toThrowError();
      });
    });
  });

  describe("favorite one tweet", () => {
    test("favoriting is successful", async () => {
      await provider.addInteraction({
        states: [{ description: "favoriting a tweet tweet" }],
        uponReceiving: "favorite tweet",
        withRequest: {
          method: "POST",
          path: "/tweets/favorite/1",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: true,
        },
      });

      const tweetToFavorite = tweetsData[0];

      await provider.executeTest(async (mockService) => {
        const api = createApiInstance(mockService.url);

        await expect(
          api.favoriteTweet(tweetToFavorite.id)
        ).resolves.not.toThrowError();
      });
    });
  });
});
