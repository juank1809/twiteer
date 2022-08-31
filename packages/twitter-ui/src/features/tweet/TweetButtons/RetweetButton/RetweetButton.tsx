import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { RetweetModal } from "../../../retweet/retweet-form";
import CreateIcon from "@mui/icons-material/Create";
import type { TweetProps } from "../../Tweet";
import DropDown from "rc-dropdown";
import Menu, { Item } from "rc-menu";
import { useTweets } from "../../../../context/TweetContext";
import "rc-dropdown/assets/index.css";

const RetweetCount: React.FC<TweetProps> = ({ tweet }) => {
  /*
  State of the Modal responsible for quoting a tweet
  */
  const [isOpen, setIsOpen] = useState(false);
  const { addRetweet } = useTweets();

  const openRetweetModal = () => {
    setIsOpen(true);
  };

  const retweetWithoutText = () => {
    addRetweet(tweet);
  };

  /*
   Function to display the JSX Menu items of the DropDown Menu
   The options are:
    -Retweet with a quote
    -Normal Retweet
  */

  /*
    TODO: Maybe we can abstract the Menu and Dropdown into their own component.
    */

  const retweetDropDownMenu = () => (
    <Menu className="dropdown__menu">
      {/*Retweet directly without text */}

      <Item
        className="dropdown__menu-item"
        key={2}
        onClick={() => retweetWithoutText()}
      >
        <AutorenewIcon className="dropdown__menu__icon" />
        Retweet
      </Item>

      {/*Open Modal to add text to a retweet */}
      <Item
        className="dropdown__menu-item"
        key={1}
        onClick={() => openRetweetModal()}
      >
        <CreateIcon className="dropdown__menu__icon" />
        Quote Tweet
      </Item>
    </Menu>
  );

  return (
    <>
      <DropDown
        overlayClassName="dropdown"
        trigger={["click"]}
        placement={"bottomCenter"}
        overlay={retweetDropDownMenu}
      >
        <span title="retweet count" className="tweet__retweet-count">
          <AutorenewIcon
            width={"18px"}
            style={{
              fill: tweet.type === "retweet" ? "green" : "",
            }}
          />{" "}
          {tweet.retweetCount}
        </span>
      </DropDown>

      <RetweetModal tweet={tweet} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default RetweetCount;
