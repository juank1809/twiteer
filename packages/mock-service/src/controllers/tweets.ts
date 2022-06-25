import { tweetsData } from "../../tweetsData";
import { Request, Response } from "express";

export const GetTweetsController = (_: Request, res: Response) => {
  res.send(tweetsData);
};

export const PostTweetController = (req: Request, res: Response) => {
  tweetsData.push(req.body);
  res.send(tweetsData);
};
