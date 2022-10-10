import "./App.css";
import "./App.scss";
import "normalize.css";

import { TweetsFeed } from "./features/tweet-feed";
import { TweetContextProvider } from "./context/TweetContext";
import { NewTweetForm } from "./features/new-tweet";

function App() {
  return (
    <TweetContextProvider>
      <NewTweetForm />
      <TweetsFeed />
    </TweetContextProvider>
  );
}

export default App;
