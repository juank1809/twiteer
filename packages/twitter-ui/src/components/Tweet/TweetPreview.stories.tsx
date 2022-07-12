import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TweetPreview } from ".";
import "../../App.scss";

export default {
  title: "Tweet",
  component: TweetPreview,
} as ComponentMeta<typeof TweetPreview>;

const Template: ComponentStory<typeof TweetPreview> = (args) => (
  <TweetPreview {...args} />
);

export const NormalTweetPreview = Template.bind({});

NormalTweetPreview.args = {
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
