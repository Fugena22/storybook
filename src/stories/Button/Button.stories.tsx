import { Button } from "../../components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  decorators: [
    (Story) => (
      <div className="mx-20">
        <Story />
      </div>
    ),
  ],
};
