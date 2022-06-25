import express from "express";
import {
  GetTweetsController,
  PostTweetController,
} from "../controllers/tweets";

const router = express.Router();

router.get("/tweets", GetTweetsController);
router.post("/tweets", PostTweetController);

export default router;
