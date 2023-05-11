import express from "express";
import tweetController from "./controllers/tweets.controller";
import cors from 'cors'

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tweets", tweetController);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
