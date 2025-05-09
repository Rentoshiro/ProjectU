import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "Text",
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "Text",
  },
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: "Text",
  },
};
