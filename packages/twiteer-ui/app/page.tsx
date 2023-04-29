import { Nunito } from "next/font/google";
import { TweetContextProvider } from "./context/TweetContext";
<<<<<<< HEAD
import { NewTweetForm } from "./features/new-tweet";
=======
>>>>>>> main
import { TweetsFeed } from "./features/tweet-feed";
const font = Nunito({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <TweetContextProvider>
      <TweetsFeed />
    </TweetContextProvider>
  );
}
