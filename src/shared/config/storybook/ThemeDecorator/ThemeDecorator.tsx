// src/shared/config/ThemeDecorator.tsx
import React from "react";
import "app/styles/index.scss";
import type { Decorator, StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
  return (Story: StoryFn) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
