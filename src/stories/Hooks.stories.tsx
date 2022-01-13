import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hooks, { HooksProps } from "./Hooks";

export default {
  title: "Hooks",
  component: Hooks,
} as ComponentMeta<typeof Hooks>;

const Template: ComponentStory<typeof Hooks> = (args) => <Hooks {...args} />;

export const UseOutsideClick = Template.bind({});
UseOutsideClick.args = {
  hookKey: "use-outside-click",
} as HooksProps;

export const UseOnResize = Template.bind({});
UseOnResize.args = {
  hookKey: "use-on-resize",
} as HooksProps;
