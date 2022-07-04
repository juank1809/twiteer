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

export default router;
