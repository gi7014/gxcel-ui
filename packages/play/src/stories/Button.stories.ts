import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, expect, userEvent } from "@storybook/test";

import { GButton } from "gxcel-ui";

type Story = StoryObj<typeof GButton> & { argTypes: ArgTypes };

const meta: Meta<typeof GButton> = {
  title: "Example/Button",
  component: GButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset"]
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    icon: {
      control: { type: "text" }
    },
    loadingIcon: {
      control: { type: "text" }
    },
    animation: {
      control: { type: "select" },
      options: ["scale", "heartbeat", ""],
    }
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin: 5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    content: "Button",
  },
  render: (args) => ({
    components: { GButton },
    setup() {
      return { args };
    },
    template: container(`<g-button v-bind="args">{{args.content}}</g-button>`),
  }),

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click btn', async() => {
      await userEvent.click(canvas.getByRole('button'))
    })

    expect(args.onClick).toHaveBeenCalled()
  },
};

export default meta;
