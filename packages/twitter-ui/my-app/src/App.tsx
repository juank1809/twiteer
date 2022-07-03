import "./App.css";
import "./App.scss";
import "normalize.css";

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
    message: `Her ay 70 TL ücret.
    Günde 7-8 kere kopma. 
    3 haftadır her aradığımda "Ekip arkadaşlarımız çalışıyor." yanıtı, sanırım fiber falan döşüyorlar.`,
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
