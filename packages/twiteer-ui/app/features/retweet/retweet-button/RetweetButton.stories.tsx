import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RetweetButton } from ".";

export default {
  title: "Tweets Buttons",
  component: RetweetButton,
  argTypes: { onClick: { action: "You just retweeted this tweet!" } },
} as ComponentMeta<typeof RetweetButton>;

const Template: ComponentStory<typeof RetweetButton> = (args) => (
  <RetweetButton {...args} />
);

export const NormalRetweetButton = Template.bind({});

NormalRetweetButton.args = {
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

export const ActiveRetweetButton = Template.bind({});

ActiveRetweetButton.args = {
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
