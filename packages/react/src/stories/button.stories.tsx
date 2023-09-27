import { type Meta, type StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

import { Button } from '@/components/button'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Button>

export const Base: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {},
}
export const Outline: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'outline',
  },
}
export const Transparent: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'transparent',
  },
}
export const Secondary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'secondary',
  },
}
export const Link: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'link',
  },
}
export const Disable: Story = {
  render: (args) => (
    <Button disabled {...args}>
      Button
    </Button>
  ),
  args: {
    variant: 'primary',
  },
}

export const Destructive: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'destructive',
  },
}
export const Loading: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    loading: true,
    variant: 'outline',
  },
}
export const StartIcon: Story = {
  render: (args) => (
    <Button startIcon={<Mail />} {...args}>
      Login with Email Button
    </Button>
  ),
  args: {
    variant: 'secondary',
  },
}

export const EndIcon: Story = {
  render: (args) => (
    <Button endIcon={<Mail />} {...args}>
      Login with Email Button
    </Button>
  ),
  args: {
    variant: 'secondary',
  },
}
