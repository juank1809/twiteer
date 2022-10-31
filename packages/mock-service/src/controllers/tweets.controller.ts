import express, { Request, Response, NextFunction } from "express";
import {
  tweetsData,
  getGetRouteTweetsData,
  getPostRouteTweetsData,
  getRetweetRouteTweetsData,
  getFavoriteRouteTweetsData,
  setGetRouteTweetsData,
  setPostRouteTweetsData,
  setFavoriteRouteTweetsData,
  setRetweetRouteTweetsData,
  clearTweetsDataProvider,
  isTweetsDataProviderEmpty,
} from "../tweets-data-provider";

const router = express.Router();

/* Middleware intercepter util for the server-state route */
router.use("/", (req: Request, res: Response, next: NextFunction) => {
  if (!isTweetsDataProviderEmpty()) next();

  /*/ If the incoming request is a GET request and there exists data in the 
  GETRouteTweetsDataProvider the return the stored data.
  */
  if (req.method === "GET" && getGetRouteTweetsData()) {
    console.log("hello", getGetRouteTweetsData());
    return res.json(getGetRouteTweetsData());
  } else if (
    req.method === "POST" &&
    req.baseUrl === "/tweets" &&
    getGetRouteTweetsData()
  ) {
    return res.send(getPostRouteTweetsData());
  } else if (
    req.method === "POST" &&
    req.baseUrl === "/retweet" &&
    getRetweetRouteTweetsData()
  ) {
    return res.send(getRetweetRouteTweetsData());
  } else if (req.method === "PUT" && getFavoriteRouteTweetsData()) {
    return res.send(getFavoriteRouteTweetsData());
  }
  next();
});

router.get("/tweets", (req: Request, res: Response, _: NextFunction) => {
  res.send(tweetsData);
});

router.post("/tweets", (req: Request, res: Response, _: NextFunction) => {
  tweetsData.push(req.body);
  res.send(tweetsData);
});

router.post("retweet", (req: Request, res: Response) => {
  const tweetId = req.body.tweet.id;
  const toRetweet = tweetsData.find((tweet) => tweet.id === tweetId);

  if (!toRetweet) {
    return res.status(404).send({
      error: "Tweet to retweet not found!",
    });
  }

  tweetsData.push(toRetweet);

  res.send(tweetsData);
});

router.post("favorite", (req: Request, res: Response) => {
  const tweetId = req.body.tweet.id;

  tweetsData.map((tweet) => {
    tweet.id === tweetId
      ? {
          ...tweet,
          favoriteCount: tweet.favoriteCount + 1,
        }
      : tweet;
  });

  return res.send(tweetsData);
});

/* This helper route allow us to change different route data methods 
using the middleware defined above of this module */
router.put("/server-state", (req: Request, res: Response) => {
  const { action, value } = req.body;
  console.log(value);
  switch (action) {
    case "get.tweets":
      console.log("is this being run");
      setGetRouteTweetsData(value);
      return res.send(getGetRouteTweetsData());
      break;
    case "post.tweets":
      setPostRouteTweetsData(value);
      break;
    case "favorite.tweets":
      setFavoriteRouteTweetsData(value);
      break;
    case "retweet.tweets":
      setRetweetRouteTweetsData(value);
      break;
    case "clear.tweets":
      clearTweetsDataProvider();
      break;
  }
});

export default router;
