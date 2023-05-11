import User from "./user";

export interface ITweet {
  id: number;
  user: User;
  message: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  type: "default" | "retweet";
  retweetQuote?: string;
}

export type TweetWithoutId = Omit<ITweet, "id">;
