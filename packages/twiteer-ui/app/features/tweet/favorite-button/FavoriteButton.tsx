"use client";

import React, { useEffect, useState } from "react";

import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";

import { MdOutlineFavoriteBorder } from "react-icons/md";

const FavoriteCount: React.FC<{ tweet: ITweet }> = ({
  tweet: { id, favoriteCount },
}) => {
  const [isAlreadyFavorite, setIsAlreadyFavorite] = useState(false);
  const { incrementFavorite } = useTweets();
  const mutation = incrementFavorite();
  const handleFavoriteClick = () => {
    mutation.mutate(id);
    console.log(mutation.isSuccess);
    setIsAlreadyFavorite((prev) => !prev);
  };
  return (
    <span
      title="favorite count"
      onClick={() => handleFavoriteClick()}
      className="flex text-gray items-center text-xs gap-1 cursor-pointer min-w-min"
    >
      <MdOutlineFavoriteBorder
        className={`w-5 h-5
       ${isAlreadyFavorite ? "fill-red-500" : ""}
      `}
      />

      {favoriteCount}
    </span>
  );
};

export default FavoriteCount;
