import "./App.css";
import "./App.scss";
import "normalize.css";

import { TweetsFeed } from "./features/TweetFeed";
import { TweetContextProvider } from "./context/TweetContext";
import { NewTweetForm } from "./features/Forms/NewTweetForm";

function App() {
  return (
    <TweetContextProvider>
      <NewTweetForm />
      <TweetsFeed />
    </TweetContextProvider>
  );
}

export default App;
