import { type Meta, type StoryObj } from '@storybook/react'

import { Alert, AlertDescription, AlertTitle } from '@/components/alert'

function SimpleAlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}

const baseArgs = {}

export default {
  title: 'ui/Alert',
  component: SimpleAlertDemo,
  args: baseArgs,
} satisfies Meta<typeof SimpleAlertDemo>

type Story = StoryObj<typeof SimpleAlertDemo>

export const SimpleAlert: Story = {}
