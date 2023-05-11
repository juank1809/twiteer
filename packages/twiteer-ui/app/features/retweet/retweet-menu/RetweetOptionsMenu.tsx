"use client";

// import "rc-dropdown/assets/index.css";
import React, { useState } from "react";
import Menu, { Item } from "rc-menu";
import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";
import { RetweetModal } from "../retweet-form";
import "rc-dropdown/assets/index.css";

import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

const RetweetOptionsMenu: React.FC<{ tweet: ITweet }> = ({ tweet }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { addRetweet } = useTweets();
  const mutation = addRetweet();
  const retweetWithoutText = () => {
    mutation.mutate(tweet);
    console.log(mutation.data);
  };

  const openRetweetModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Menu className="!bg-black cursor-pointer inline-block text-base min-w-min !rounded-xl !shadow-dropdown-shadow !border-0 overflow-hidden">
        {/*Retweet directly without text */}
        <Item
          className=" text-white flex items-center gap-3 !pt-4 !pr-6  !pb-4 !pl-3 font-bold hover:bg-neutral-900"
          key={2}
          onClick={() => retweetWithoutText()}
        >
          <AiOutlineRetweet className="fill-white w-6 h-6 " />
          Retweet
        </Item>

        {/*Open Modal to add text to a retweet */}
        <Item
          className="text-white flex items-center gap-3 !pt-3 !pr-6 !pb-3 !pl-3 font-bold hover:bg-neutral-900"
          key={1}
          onClick={() => openRetweetModal()}
        >
          <TbPencilMinus className="fill-white w-6 h-6 " />
          Quote Tweet
        </Item>
      </Menu>{" "}
      <RetweetModal tweet={tweet} isOpen={modalOpen} setIsOpen={setModalOpen} />
    </>
  );
};

export default RetweetOptionsMenu;
