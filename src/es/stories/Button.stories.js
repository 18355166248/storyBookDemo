import React from "react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button777",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button666666",
};
