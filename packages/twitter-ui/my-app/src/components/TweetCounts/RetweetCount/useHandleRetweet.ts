import { useEffect } from "react";
import { ITweet } from "../../../types/tweet";

export default function useHandleRetweet(
  tweetToRetweet: ITweet,
  tweets: ITweet[],
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>
) {
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
    console.log(localStorage.getItem("tweets"));
  }, [tweets]);

  const handleRetweet = () => {
    console.log("this should cause rerender");
    setTweets((prev) => [tweetToRetweet, ...prev]);
  };

  return { handleRetweet };
}
