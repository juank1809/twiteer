import express from "express";
import tweetController from "./controllers/tweets.controller";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", tweetController);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
