"use client";

import React, { useEffect, useState } from "react";

import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";

import { MdOutlineFavoriteBorder } from "react-icons/md";

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
      className="flex text-gray items-center text-xs gap-1 cursor-pointer min-w-min"
    >
      <MdOutlineFavoriteBorder className="w-5 h-5" />
      {favoriteCount}
    </span>
  );
};

export default FavoriteCount;
