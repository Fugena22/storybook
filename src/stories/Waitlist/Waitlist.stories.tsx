"use client";
import WaitlistForm from "../../components/ui/waitlist";

import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof WaitlistForm> = {
  title: "Example/Waitlist",
  component: WaitlistForm,
};

export default meta;
type Story = StoryObj<typeof WaitlistForm>;

export const Waitlist: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText("name", {
      selector: "input",
    });

    await userEvent.type(nameInput, "Hello", {
      delay: 100,
    });

    const emailInput = canvas.getByLabelText("email", {
      selector: "input",
    });

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText("password", {
      selector: "input",
    });

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    });
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
  },
};
