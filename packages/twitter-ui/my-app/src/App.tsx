import "./App.css";
import "./App.scss";
import TweetsFeed from "./components/TweetsFeed";

const tweets = [
  {
    user: {
      fullName: "Christoper Francisco",
      username: "christopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
  },
  {
    user: {
      fullName: "Jaun García",
      username: "juank",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
  },
  {
    user: {
      fullName: "Daniel Fernando",
      username: "dani",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
  },
];

function App() {
  return <TweetsFeed tweets={tweets} />;
}

export default App;
