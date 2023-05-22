import { Nunito } from "next/font/google";
import { TweetContextProvider } from "./context/TweetContext";
import "./globals.css";
import { Header } from "design-system";

import { TweetsFeed } from "./features/tweet-feed";
const font = Nunito({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <TweetContextProvider>
      <Header label="Home" />
      <TweetsFeed />
    </TweetContextProvider>
  );
}
