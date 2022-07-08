import "./App.css";
import "./App.scss";
import "normalize.css";

import TweetsFeed from "./components/TweetsFeed/TweetsFeed";
import { TweetContextProvider } from "./context/TweetContext";

function App() {
  return (
    <TweetContextProvider>
      <TweetsFeed />
    </TweetContextProvider>
  );
}

export default App;
