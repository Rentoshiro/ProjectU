// src/shared/config/StyleDecorator.tsx
import "app/styles/index.scss";
import type { Decorator } from "@storybook/react";

export const StyleDecorator: Decorator = (Story) => {
  return <Story />;
};
