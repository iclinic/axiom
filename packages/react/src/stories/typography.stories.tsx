import { type Meta, type StoryObj } from '@storybook/react'

import {
  BlockQuote,
  H1,
  H2,
  H3,
  H4,
  InlineCode,
  LI,
  P,
  UL,
} from '@/components/typography'

const meta: Meta = {
  title: 'ui/Typography',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj

export const H1Story: Story = {
  name: 'H1',
  render: (args) => <H1>Taxing Laughter: The Joke Tax Chronicles</H1>,
  args: {},
}

export const H2Story: Story = {
  name: 'H2',
  render: (args) => <H2>Taxing Laughter: The Joke Tax Chronicles</H2>,
  args: {},
}

export const H3Story: Story = {
  name: 'H3',
  render: (args) => <H3>Taxing Laughter: The Joke Tax Chronicles</H3>,
  args: {},
}

export const H4Story: Story = {
  name: 'H4',
  render: (args) => <H4>Taxing Laughter: The Joke Tax Chronicles</H4>,
  args: {},
}

export const PStory: Story = {
  name: 'P',
  render: (args) => <P>Taxing Laughter: The Joke Tax Chronicles</P>,
  args: {},
}

export const BlockQuoteStory: Story = {
  name: 'BlockQuote',
  render: (args) => (
    <BlockQuote>Taxing Laughter: The Joke Tax Chronicles</BlockQuote>
  ),
  args: {},
}

export const ListULStory: Story = {
  name: 'List UL',
  render: (args) => (
    <UL className="my-6 ml-6 list-disc [&>li]:mt-2">
      <LI>1st level of puns: 5 gold coins</LI>
      <LI>2nd level of jokes: 10 gold coins</LI>
      <LI>3rd level of humor: 15 gold coins</LI>
    </UL>
  ),
  args: {},
}

export const InlineCodeStory: Story = {
  name: 'InlineCode',
  render: (args) => (
    <InlineCode>Taxing Laughter: The Joke Tax Chronicles</InlineCode>
  ),
  args: {},
}
