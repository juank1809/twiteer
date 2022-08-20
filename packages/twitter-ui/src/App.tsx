import "./App.css";
import "./App.scss";
import "normalize.css";

import { TweetsFeed } from "./components/TweetsFeed";
import { TweetContextProvider } from "./context/TweetContext";
import { NewTweetForm } from "./components/Form";

function App() {
  return (
    <TweetContextProvider>
      <NewTweetForm />
      <TweetsFeed />
    </TweetContextProvider>
  );
}

export default App;
