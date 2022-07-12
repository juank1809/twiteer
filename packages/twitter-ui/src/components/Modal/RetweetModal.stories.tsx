import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from ".";
import "../../App.scss";
import { TweetTextArea } from "../TweetTextArea";

export default {
  title: "Tweets Buttons",
  component: Modal,
  argTypes: { onClick: { action: "You just favorited this tweet!" } },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const NormalModal = Template.bind({});

NormalModal.args = {
  children: <TweetTextArea></TweetTextArea>,
};
