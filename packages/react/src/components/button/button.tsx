import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import {
  cva,
  type VariantProps as CvaVariantProps,
} from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'focus-visible:ring-ring',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-sm',
    'text-sm',
    'filter-none',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'font-medium',
    'transition-colors',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-interactive-accent-default',
          'text-onInteractive-accent',
          'hover:bg-interactive-accent-hovered',
        ],
        destructive: [
          'bg-interactive-alert-accent-default',
          'text-onInteractive-alert-accent',
          'hover:bg-interactive-alert-accent-hovered',
        ],
        outline: [
          'border-interactive-accent-default',
          'hover:border-interactive-accent-hovered',
          'text-interactive-accent-default',
          'hover:text-interactive-accent-hovered',
          'border',
        ],
        secondary: [
          'bg-interactive-subtle-default',
          'text-onInteractive-subtle',
          'hover:bg-interactive-subtle-hovered',
        ],
        ghost: [
          'hover:bg-interactive-subtle-hovered',
          'text-onInteractive-subtle',
        ],
        link: ['text-link-default', 'underline-offset-4', 'hover:underline'],
      },
      size: {
        default: 'h-10 px-4 py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface NativeProps extends React.ComponentPropsWithoutRef<'button'> {
  //
}
interface VariantProps extends CvaVariantProps<typeof buttonVariants> {
  //
}

export interface ButtonProps extends VariantProps, NativeProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
