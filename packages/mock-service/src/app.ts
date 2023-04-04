import express from "express";
import tweetController from "./controllers/tweets.controller";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tweets", tweetController);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
