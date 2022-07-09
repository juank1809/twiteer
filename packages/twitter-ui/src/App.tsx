import "./App.css";
import "./App.scss";
import "normalize.css";

import { TweetsFeed } from "./components/TweetsFeed";
import { TweetContextProvider } from "./context/TweetContext";
import { TweetTextArea } from "./components/TweetTextArea";

function App() {
  return (
    <TweetContextProvider>
      <TweetTextArea />
      <TweetsFeed />
    </TweetContextProvider>
  );
}

export default App;
