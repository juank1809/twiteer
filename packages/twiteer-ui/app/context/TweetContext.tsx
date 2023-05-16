"use client";

import { createContext, useContext, useState } from "react";
import { ITweet, TweetWithoutId } from "../types/tweet";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";

import { api } from "../api/api";

export const TweetContext = createContext<TweetContextValues | undefined>(
  undefined
);

export interface TweetContextValues {
  getTweets: () => ITweet[] | undefined;
  addTweet: () => UseMutationResult<ITweet[], unknown, TweetWithoutId, unknown>;
  addRetweet: () => UseMutationResult<ITweet[], unknown, ITweet, unknown>;
  incrementFavorite: () => UseMutationResult<
    ITweet[],
    unknown,
    number,
    unknown
  >;
}

interface TweetContextProviderChildren {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const TweetContextProvider: React.FC<TweetContextProviderChildren> = ({
  children,
}) => {
  const getTweets = () => {
    const query = useQuery("tweets", api.getAllTweets);
    return query.data;
  };
  const incrementFavorite = () => {
    const mutation = useMutation(api.favoriteTweet);

    return mutation;
  };

  const addTweet = () => {
    const mutation = useMutation(api.postTweet, {
      onSuccess: () => queryClient.invalidateQueries("tweets"),
    });
    return mutation;
  };

  const addRetweet = () => {
    console.log("is this getting called");
    const mutation = useMutation(api.retweetTweet, {
      onSuccess: () => queryClient.invalidateQueries("tweets"),
    });
    return mutation;
  };

  const value: TweetContextValues = {
    getTweets,
    addTweet,
    addRetweet,
    incrementFavorite,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
    </QueryClientProvider>
  );
};

export function useTweets() {
  const context = useContext(TweetContext);
  if (context === undefined) {
    throw new Error(
      "TweetContext must be use used within TweetContextProvider Tree"
    );
  }
  return context;
}
