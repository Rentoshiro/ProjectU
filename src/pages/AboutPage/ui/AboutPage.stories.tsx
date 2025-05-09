// src/pages/AboutPage/AboutPage.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  // Poţi seta tema "light" pentru toate story-urile implicit aici:
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {
  // va moşteni LIGHT din meta
};

export const Dark: Story = {
  // doar aici "override"-ăm tema:
  decorators: [ThemeDecorator(Theme.DARK)],
};
