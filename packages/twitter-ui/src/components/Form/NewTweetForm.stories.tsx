import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { NewTweetForm } from "../Form";

export default {
  title: "Form",
  component: NewTweetForm,
} as ComponentMeta<typeof NewTweetForm>;

const Template: ComponentStory<typeof NewTweetForm> = (args) => (
  <NewTweetForm {...args} />
);

export const NormalNewTweetForm = Template.bind({});
