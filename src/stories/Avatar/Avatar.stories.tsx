import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Meta, StoryObj } from "@storybook/react";
import { AvaImage } from "./AvatarImage.stories";

const meta: Meta<typeof Avatar> = {
  title: "Story/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Ava: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage {...AvaImage.args} />
    </Avatar>
  ),
};
