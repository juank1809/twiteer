import axios from "axios";
import { ITweet } from "../types/tweet";

export default function createApiInstance(url: string) {
  const axiosInstance = axios.create({
    baseURL: (url ?? process.env.REACT_APP_API_BASE_URL) + "/tweets",
  });

  function getAllTweets() {
    return axiosInstance.get("").then((res) => res.data);
  }

  function postTweet(tweet: ITweet) {
    return axiosInstance.post("", { tweet: tweet }).then((res) => res.data);
  }

  function retweetTweet(id: number) {
    return axiosInstance.post(`/retweet/${id}`).then((res) => res.data);
  }

  function favoriteTweet(id: number) {
    return axiosInstance.post(`favorite/${id}`).then((res) => res.data);
  }

  return { getAllTweets, postTweet, retweetTweet, favoriteTweet };
}
