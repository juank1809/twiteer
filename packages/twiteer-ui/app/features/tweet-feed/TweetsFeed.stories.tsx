// import "../../App.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TweetsFeed } from ".";

export default {
  title: "Tweets Feed",
  component: TweetsFeed,
} as ComponentMeta<typeof TweetsFeed>;

const Template: ComponentStory<typeof TweetsFeed> = (args) => (
  <TweetsFeed {...args} />
);

export const NormalTweetsFeed = Template.bind({});
