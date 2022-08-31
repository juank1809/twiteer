import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "../../../components/Modal";
import "../../App.scss";
import { RetweetModal } from "./";

export default {
  title: "Modals",
  component: RetweetModal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof RetweetModal> = (args) => (
  <RetweetModal {...args} />
);

export const RetweetNormalModal = Template.bind({});

RetweetNormalModal.args = {
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
