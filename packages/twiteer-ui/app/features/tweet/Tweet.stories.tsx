// import "../../App.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tweet } from ".";

export default {
  title: "Tweet",
  component: Tweet,
} as ComponentMeta<typeof Tweet>;

const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />;

export const NormalTweet = Template.bind({});

NormalTweet.args = {
  tweet: {
    id: 1,
    user: {
      fullName: "Christoper Francisco",
      username: "@christopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "default",
  },
};

export const RetweetedTweet = Template.bind({});

RetweetedTweet.args = {
  tweet: {
    id: 1,
    user: {
      fullName: "Christoper Francisco",
      username: "@christopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "retweet",
  },
};
