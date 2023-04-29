"use client";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NewTweetForm } from ".";

export default {
  title: "Form",
  component: NewTweetForm,
} as ComponentMeta<typeof NewTweetForm>;

const Template: ComponentStory<typeof NewTweetForm> = (args) => (
  <NewTweetForm {...args} />
);

export const NormalNewTweetForm = Template.bind({});
