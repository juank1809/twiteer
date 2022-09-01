import React, { useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";

const FavoriteCount: React.FC<{ tweet: ITweet }> = ({
  tweet: { id, favoriteCount },
}) => {
  const [isAlreadyFavorite, setIsAlreadyFavorite] = useState<boolean>(false);
  const { incrementFavorite, decrementFavorite } = useTweets();

  const handleFavoriteClick = () => {
    setIsAlreadyFavorite((prev) => !prev);
    isAlreadyFavorite ? decrementFavorite(id) : incrementFavorite(id);
  };

  return (
    <span
      title="favorite count"
      onClick={() => handleFavoriteClick()}
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
