import React, { useEffect, useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";

const FavoriteCount: React.FC<{ tweet: ITweet }> = ({
  tweet: { id, favoriteCount },
}) => {
  const [shouldIncrementFavorite, setShouldIncrementFavorite] =
    useState<boolean>(false);
  const { incrementFavorite, decrementFavorite } = useTweets();

  useEffect(() => {
    shouldIncrementFavorite ? incrementFavorite(id) : decrementFavorite(id);
  }, [shouldIncrementFavorite]);

  const handleFavoriteClick = () => {
    setShouldIncrementFavorite((prev) => !prev);
  };

  return (
    <span
      title="favorite count"
      onClick={() => handleFavoriteClick()}
      className="tweet__favorite-count"
    >
      <FavoriteBorderOutlinedIcon
        style={{
          fill: shouldIncrementFavorite ? "red" : "",
        }}
        width={"18px"}
      />
      {favoriteCount}
    </span>
  );
};

export default FavoriteCount;
