import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserImage } from ".";
import "../../App.scss";

export default {
  title: "User Image",
  component: UserImage,
} as ComponentMeta<typeof UserImage>;

const Template: ComponentStory<typeof UserImage> = (args) => (
  <UserImage {...args} children={"J G"} />
);

export const SmallUserImage = Template.bind({});

SmallUserImage.args = {
  size: "small",
};

export const MediumUserImage = Template.bind({});

MediumUserImage.args = {
  size: "medium",
};

export const LargeUserImage = Template.bind({});

LargeUserImage.args = {
  size: "large",
};
