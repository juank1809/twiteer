// import "../../../App.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FavoriteButton } from ".";
import { tweetsData } from "../../../tweetsData";

export default {
  title: "Tweets Buttons",
  component: FavoriteButton,
  argTypes: { onClick: { action: "You just favorited this tweet!" } },
} as ComponentMeta<typeof FavoriteButton>;

const Template: ComponentStory<typeof FavoriteButton> = (args) => (
  <FavoriteButton {...args} />
);

export const NormalFavoriteButton = Template.bind({});

NormalFavoriteButton.args = {
  tweet: tweetsData[0],
};
