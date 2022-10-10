import express, { Request, Response, NextFunction } from "express";
import { tweetsData } from "../../tweetsData";

const router = express.Router();

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

export default router;
