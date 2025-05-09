// src/shared/Button/Button.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINEDARK,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
