import { Select } from "../../components/ui/select";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Story/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Gender: Story = {
  render: (args) => (
    <Select {...args}>
      <AvatarImage {...AvaImage.args} />
    </Select>
  ),
};
