import express, { Request, Response, NextFunction } from "express";
import {
  tweetsData,

} from "../../tweets-data-provider";

const router = express.Router();

// /* Middleware intercepter util for the server-state route */
// router.use("/", (req: Request, res: Response, next: NextFunction) => {
//   if (!isTweetsDataProviderEmpty()) next();

//   /*/ If the incoming request is a GET request and there exists data in the 
//   GETRouteTweetsDataProvider the return the stored data.
//   */
//   if (req.method === "GET" && getGetRouteTweetsData()) {
//     return res.json(getGetRouteTweetsData());
//   } else if (
//     req.method === "POST" &&
//     req.baseUrl === "/tweets" &&
//     getGetRouteTweetsData()
//   ) {
//     return res.json(getPostRouteTweetsData());
//   } else if (
//     req.method === "POST" &&
//     req.baseUrl === "/retweet" &&
//     getRetweetRouteTweetsData()
//   ) {
//     return res.json(getRetweetRouteTweetsData());
//   } else if (req.method === "PUT" && getFavoriteRouteTweetsData()) {
//     return res.json(getFavoriteRouteTweetsData());
//   }
//   next();
// });

router.get("/", (_req: Request, res: Response) => {
  res.json(tweetsData);
});

router.post("/", (req: Request, res: Response) => {
  console.log(req.body)
  tweetsData.unshift(req.body.tweet)
  return res.json(tweetsData);
});

router.post("/retweet/:id", (req: Request, res: Response) => {
  const tweetId = parseInt(req.params.id);
  const toRetweet = tweetsData.find((tweet) => tweet.id === tweetId);

  if (!toRetweet) {
    return res.status(404).json({
      error: "Tweet to retweet not found!",
    });
  }

  tweetsData.unshift(toRetweet);

  res.json(true);
});

router.post("/favorite/:id", (req: Request, res: Response) => {
  const tweetId = parseInt(req.params.id)

  tweetsData.map((tweet) => {
    tweet.id === tweetId
      ? {
          ...tweet,
          favoriteCount: tweet.favoriteCount + 1,
        }
      : tweet;
  });

  

  return res.json(true);
});

/* This helper route allow us to change different route data methods 
using the middleware defined above of this module */
// router.put("/server-state", (req: Request, res: Response) => {
//   const { action, value } = req.body;
//   console.log(value);
//   switch (action) {
//     case "get.tweets":
//       console.log("is this being run");
//       setGetRouteTweetsData(value);
//       return res.json(getGetRouteTweetsData());
//       break;
//     case "post.tweets":
//       setPostRouteTweetsData(value);
//       break;
//     case "favorite.tweets":
//       setFavoriteRouteTweetsData(value);
//       break;
//     case "retweet.tweets":
//       setRetweetRouteTweetsData(value);
//       break;
//     case "clear.tweets":
//       clearTweetsDataProvider();
//       break;
//   }
// });

export default router;
