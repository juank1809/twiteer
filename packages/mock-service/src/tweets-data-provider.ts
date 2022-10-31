export const tweetsData: ITweet[] = [
  {
    id: 1,
    user: {
      fullName: "Christoper Francisco",
      username: "christopher",
    },
    message: "I like surfing!",
    favoriteCount: 3,
    replyCount: 2,
    type: "default",
    retweetCount: 1,
  },
  {
    id: 2,
    user: {
      fullName: "Jaun García",
      username: "juank",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "default",
  },
  {
    id: 3,
    user: {
      fullName: "Daniel Fernando",
      username: "dani",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "default",
  },
];

type actions = "get" | "post" | "favorite" | "retweet" | "clear";

export interface ITweet {
  id: number;
  user: any;
  message: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  type: "default" | "retweet";
  retweet?: string;
}

export type tweetActions = `${actions}.tweets`;

export const tweetsDataProvider = new Map<tweetActions, ITweet[]>();

export function isTweetsDataProviderEmpty() {
  return tweetsDataProvider.size > 0;
}

export function getGetRouteTweetsData() {
  return tweetsDataProvider.get("get.tweets");
}

export function setGetRouteTweetsData(value: ITweet[]) {
  tweetsDataProvider.set("get.tweets", value);
}

export function getPostRouteTweetsData() {
  return tweetsDataProvider.get("post.tweets");
}

export function setPostRouteTweetsData(value: ITweet[]) {
  tweetsDataProvider.set("post.tweets", value);
}

export function getFavoriteRouteTweetsData() {
  return tweetsDataProvider.get("favorite.tweets");
}

export function setFavoriteRouteTweetsData(value: ITweet[]) {
  tweetsDataProvider.set("favorite.tweets", value);
}

export function getRetweetRouteTweetsData() {
  return tweetsDataProvider.get("retweet.tweets");
}

export function setRetweetRouteTweetsData(value: ITweet[]) {
  tweetsDataProvider.set("retweet.tweets", value);
}

export function clearTweetsDataProvider() {
  tweetsDataProvider.clear();
  return true;
}
