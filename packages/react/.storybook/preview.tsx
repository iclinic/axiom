import * as React from 'react'
import type { Preview } from "@storybook/react"

import "../src/styles.css"

import { TailwindIndicator } from '../src/components/tailwind-indicator'

const decorators = [
  (Story) => (
    <>
      <div className="m-4">
        <Story />
      </div>
      <TailwindIndicator />
    </>
  ),
]

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}



export default preview