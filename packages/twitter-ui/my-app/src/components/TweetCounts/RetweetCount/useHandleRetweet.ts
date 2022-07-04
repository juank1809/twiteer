import { useEffect } from "react";
import { ITweet } from "../../../types/tweet";

export default function useHandleRetweet(
  tweetToRetweet: ITweet,
  tweets: ITweet[],
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>
) {
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const handleRetweet = () => {
    setTweets((prev) => [tweetToRetweet, ...prev]);
  };

  return { handleRetweet };
}
