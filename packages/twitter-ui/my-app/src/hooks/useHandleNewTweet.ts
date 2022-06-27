import { useEffect } from "react";
import { ITweet } from "../types/tweet";

export default function useHandleNewTweet(
  newTweet: ITweet,
  tweets: ITweet[],
  setTweets: React.Dispatch<React.SetStateAction<ITweet[]>>
) {
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
    console.log(localStorage.getItem("tweets"));
  }, [tweets]);

  const handleNewTweet = (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e) {
      e.preventDefault();
    }
    setTweets((prev) => [newTweet, ...prev]);
  };

  return { handleNewTweet };
}
