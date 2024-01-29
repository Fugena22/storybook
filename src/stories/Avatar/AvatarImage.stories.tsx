import { AvatarImage } from "../../components/ui/avatar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarImage> = {
  title: "Children/Avatar",
  component: AvatarImage,
};

export default meta;
type Story = StoryObj<typeof AvatarImage>;

export const AvaImage: Story = {
  args: {
    src: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/83643510_2536059313338044_8035517050673692672_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=LIAOm4vCJiAAX8ALQ6C&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBnLL4-fvUMlZJSuNmDIkruyCqAWj2HcLoFW1QfjiJ3sg&oe=65DEDE10",
  },
};
