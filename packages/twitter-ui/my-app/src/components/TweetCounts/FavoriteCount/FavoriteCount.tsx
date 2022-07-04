import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import type { ITweet } from "../../../types/tweet";

type FavoriteCountProps = Pick<ITweet, "favoriteCount">;

const FavoriteCount: React.FC<FavoriteCountProps> = ({ favoriteCount }) => {
  const [isAlreadyFavorite, setIsAlreadyFavorite] = useState<boolean>(false);
  const [newFavoriteCount, setNewFavoriteCount] = useState(favoriteCount);

  const handleFavoriteClick = () => {
    setIsAlreadyFavorite((prev) => !prev);

    const calculateNewFavoriteCount = isAlreadyFavorite ? -1 : 1;
    setNewFavoriteCount((prev) => prev + calculateNewFavoriteCount);
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
      {newFavoriteCount}
    </span>
  );
};

export default FavoriteCount;
