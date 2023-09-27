import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import {
  cva,
  type VariantProps as CvaVariantProps,
} from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Loader2Icon } from 'lucide-react'

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'gap-2',
    'rounded-sm',
    'font-base',
    'filter-none',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'transition-colors',
    'tracking-md',
    'focus-visible:ring-offset-1',
    'focus-visible:ring-focus-default',
    'focus-visible:ring-offset-focus-inset',
    'disabled:pointer-events-none',
    'disabled:bg-interactive-disabled',
    'disabled:text-onInteractive-disabled',
    'disabled:text-icon-disabled',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-interactive-accent-default',
          'text-onInteractive-accent',
          'hover:bg-interactive-accent-hovered',
          'active:bg-interactive-accent-pressed',
        ],
        secondary: [
          'bg-interactive-subtle-default',
          'text-onInteractive-subtle',
          'hover:bg-interactive-subtle-hovered',
          'active:bg-interactive-subtle-pressed',
        ],
        destructive: [
          'bg-interactive-alert-accent-default',
          'text-onInteractive-alert-accent',
          '[&>svg]:text-icon-onInteractive-alert-accent',
          'hover:bg-interactive-alert-accent-hovered',
          'active:bg-interactive-alert-accent-pressed',
        ],
        outline: [
          'border-interactive-accent-default',
          'hover:border-interactive-accent-hovered',
          'text-interactive-accent-default',
          'hover:text-interactive-accent-hovered',
          'active:border-interactive-accent-pressed',
          'active:text-interactive-accent-pressed',
          'border',
        ],
        transparent: [
          'hover:bg-interactive-subtle-hovered',
          'active:bg-interactive-subtle-pressed',
          'text-onInteractive-subtle',
        ],
        link: [
          'text-link-default',
          'visited:text-link-visited',
          'underline-offset-4',
          'hover:underline',
        ],
      },
      size: {
        // TODO: change text-[14px] to text-xxs
        small: [
          'text-[14px]',
          'leading-xs',
          'px-4',
          'py-2',
          '[&>svg]:h-3',
          '[&>svg]:w-3',
        ],
        medium: ['leading-xl', 'px-4', 'py-3', 'text-xs'],
        large: ['leading-md', 'p-4', 'text-sm', '[&>svg]:h-5', '[&>svg]:w-5'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
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
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      startIcon,
      endIcon,
      asChild = false,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {startIcon}
        {loading && <Loader2Icon className="animate-spin" />}
        {children}
        {endIcon}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
