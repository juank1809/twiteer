"use client";

import React, { useEffect, useRef, useState } from "react";

import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";

import { MdOutlineFavoriteBorder } from "react-icons/md";

const FavoriteCount: React.FC<{ tweet: ITweet }> = ({
  tweet: {
    id,
    favoriteCount: firstFavoriteCount,
    isAlreadyFavourite: isFirstAlreadyFavorite,
  },
}) => {
  const [isAlreadyFavorite, setIsAlreadyFavorite] = useState(
    isFirstAlreadyFavorite
  );
  const [newFavoriteCount, setNewFavoriteCount] = useState(firstFavoriteCount);

  const initialRender = useRef(true);

  //Update tweet's count every time the user updates if this is them favorite tweet
  useEffect(() => {
    // This should not be fired at the first render

    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const shouldIncrement = isAlreadyFavorite;
    setNewFavoriteCount((prev) => {
      return shouldIncrement ? prev + 1 : prev - 1;
    });
  }, [isAlreadyFavorite]);

  const { incrementFavorite } = useTweets();
  const mutation = incrementFavorite();

  const handleFavoriteClick = async () => {
    await mutation.mutateAsync(id);

    setIsAlreadyFavorite((prev) => !prev);

    if (mutation.error) {
      console.log("eddd");
    }
  };
  return (
    <span
      title="favorite count"
      onClick={handleFavoriteClick}
      className="flex text-gray items-center text-xs gap-1 cursor-pointer min-w-min"
    >
      <MdOutlineFavoriteBorder
        className={`w-5 h-5
       ${isAlreadyFavorite ? "fill-red-500" : ""}
      `}
      />

      {newFavoriteCount}
    </span>
  );
};

export default FavoriteCount;
