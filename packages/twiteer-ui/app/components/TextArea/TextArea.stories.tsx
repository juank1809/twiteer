// import "../../App.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextArea } from ".";

export default {
  title: " Text Area",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const TextAreaNormal = Template.bind({});

TextAreaNormal.args = {
  handleChange: () => {},
  name: "Normal  text area",
  label: "What you are thinking today?",
  value: "",
};
