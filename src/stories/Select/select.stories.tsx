import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Meta, StoryObj } from "@storybook/react";
import { Value } from "./Value.stories";

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
      <SelectTrigger>
        <SelectValue {...Value.args} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Male">Nam</SelectItem>
          <SelectItem value="Female">Nữ</SelectItem>
          <SelectItem value="Another">Khác</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
