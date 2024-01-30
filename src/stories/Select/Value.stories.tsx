import { Meta, StoryObj } from "@storybook/react";
import { SelectValue } from "../../components/ui/select";

const meta: Meta<typeof SelectValue> = {
  title: "Children/Select",
  component: SelectValue,
};

export default meta;
type Story = StoryObj<typeof SelectValue>;

export const Value: Story = {
  args: {
    placeholder: "Chọn đi",
    className: "text-center",
  },
};
