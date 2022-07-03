import { tweetsData } from "../../tweetsData";
import { Request, Response } from "express";

export const TweetsController = (_: Request, res: Response) => {
  res.send(tweetsData);
};