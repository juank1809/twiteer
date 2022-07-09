import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { TweetTextArea } from ".";

export default {
  title: "Tweet Text Area",
  component: TweetTextArea,
} as ComponentMeta<typeof TweetTextArea>;

const Template: ComponentStory<typeof TweetTextArea> = (args) => (
  <TweetTextArea {...args} />
);

export const TweetTextAreaNormal = Template.bind({});
