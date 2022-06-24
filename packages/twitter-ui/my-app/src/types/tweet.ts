import User from "./user";

export interface ITweet {
  user: User;
  message: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
}
