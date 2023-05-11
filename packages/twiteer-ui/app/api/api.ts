import axios from "axios";
import { ITweet, TweetWithoutId } from "../types/tweet";

export default function createApiInstance(url?: string) {
  const axiosInstance = axios.create({
    baseURL: (url ?? process.env.NEXT_PUBLIC_API_URL) + "/tweets",
  });
  console.log(process.env.NEXT_PUBLIC_API_URL);

  function getAllTweets(): Promise<ITweet[]> {
    return axiosInstance.get("").then((res) => res.data);
  }

  function postTweet(tweet: TweetWithoutId): Promise<ITweet[]> {
    return axiosInstance.post("", tweet).then((res) => res.data);
  }

  function retweetTweet(tweet: ITweet): Promise<ITweet[]> {
    return axiosInstance.post("/retweet", tweet).then((res) => res.data);
  }

  function favoriteTweet(id: number): Promise<ITweet[]> {
    return axiosInstance.post(`favorite/${id}`).then((res) => res.data);
  }

  return { getAllTweets, postTweet, retweetTweet, favoriteTweet };
}

export const api = createApiInstance();
