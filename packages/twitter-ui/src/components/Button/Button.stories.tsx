import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { Button } from ".";

export default {
  title: "Form",
  component: Button,
  argTypes: { onClick: { action: "You just clicked the button!" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});

NormalButton.args = {
  buttonType: "primary",
};
