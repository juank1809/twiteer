import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FavoriteButton } from ".";
import "../../../App.scss";

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
  id: 1,
  favoriteCount: 3,
};
