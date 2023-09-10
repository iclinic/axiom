import { type Meta, type StoryObj } from '@storybook/react'

import { Badge, type BadgeProps } from '@/components/badge'

const baseArgs: BadgeProps = {
  children: 'My badge',
  variant: 'default',
}

export default {
  title: 'ui/Badge',
  component: Badge,
  args: baseArgs,
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Default: Story = {}
