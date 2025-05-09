import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";

const meta: Meta<typeof ErrorPage> = {
  title: "widget/ErrorPage",
  component: ErrorPage,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
  args: {},
};
