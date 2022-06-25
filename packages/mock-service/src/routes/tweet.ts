import express from "express";
import { TweetsController } from "../controllers/tweets/tweets";

const router = express.Router();

router.get("/tweets", TweetsController);

export default router;