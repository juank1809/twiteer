import React from "react";
import type { TweetProps } from "../../Tweet";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const FavoriteCount: React.FC<TweetProps> = ({ tweet, tweets, setTweets }) => {
  const { isAlreadyFavorite, favoriteCount } = tweet;
  const handleFavoriteCount = () => {
    //This is a little contrived but it should work until we connect to our API and we can perform POST request to favorite
    //a tweet in this component instance so we canrefactor some of this gibberish

    setTweets((prevTweets) =>
      prevTweets.map((prevTweet) =>
        prevTweet.id === tweet.id
          ? {
              ...prevTweet,
              isAlreadyFavorite: !prevTweet.isAlreadyFavorite,
              favoriteCount:
                prevTweet.favoriteCount +
                (prevTweet.isAlreadyFavorite ? -1 : 1),
            }
          : prevTweet
      )
    );
    console.log(tweets);
  };

  return (
    <span
      title="favorite count"
      onClick={() => handleFavoriteCount()}
      className="tweet__favorite-count"
    >
      <FavoriteBorderOutlinedIcon
        style={{
          fill: isAlreadyFavorite ? "red" : "",
        }}
        width={"18px"}
      />
      {favoriteCount}
    </span>
  );
};

export default FavoriteCount;
