"use client";

// import "rc-dropdown/assets/index.css";
import React, { useState } from "react";
import Menu, { Item } from "rc-menu";
import { useTweets } from "../../../context/TweetContext";
import { ITweet } from "../../../types/tweet";
import { RetweetModal } from "../retweet-form";

const RetweetOptionsMenu: React.FC<{ tweet: ITweet }> = ({ tweet }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { addRetweet } = useTweets();

  const retweetWithoutText = () => {
    addRetweet(tweet);
  };

  const openRetweetModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Menu className="dropdown__menu">
        {/*Retweet directly without text */}
        <Item
          className="dropdown__menu-item"
          key={2}
          onClick={() => retweetWithoutText()}
        >
          <button className="dropdown__menu__icon" />
          Retweet
        </Item>

        {/*Open Modal to add text to a retweet */}
        <Item
          className="dropdown__menu-item"
          key={1}
          onClick={() => openRetweetModal()}
        >
          <button className="dropdown__menu__icon" />
          Quote Tweet
        </Item>
      </Menu>{" "}
      <RetweetModal tweet={tweet} isOpen={modalOpen} setIsOpen={setModalOpen} />
    </>
  );
};

export default RetweetOptionsMenu;
