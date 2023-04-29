import { Nunito } from "next/font/google";
import { TweetContextProvider } from "./context/TweetContext";
import { NewTweetForm } from "./features/new-tweet";
import { TweetsFeed } from "./features/tweet-feed";
const font = Nunito({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <TweetContextProvider>
      <NewTweetForm />
      <TweetsFeed />
    </TweetContextProvider>
  );
}
