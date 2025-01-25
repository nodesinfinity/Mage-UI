import Duolingo from "@/mage-ui/button/duolingo";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button/Duolingo",
  component: Duolingo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Duolingo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
