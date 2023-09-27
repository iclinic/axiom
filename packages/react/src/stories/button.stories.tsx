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
export const Ghost: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'ghost',
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
    <Button startIcon={<Mail className="h-4 w-4" />} {...args}>
      Login with Email Button
    </Button>
  ),
  args: {
    variant: 'secondary',
  },
}

export const EndIcon: Story = {
  render: (args) => (
    <Button endIcon={<Mail className="h-4 w-4" />} {...args}>
      Login with Email Button
    </Button>
  ),
  args: {
    variant: 'secondary',
  },
}
