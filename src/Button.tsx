import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'cva'
import { forwardRef } from 'react'
import { cn } from './lib/utils'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const buttonVariants = cva({
  base: 'inline-flex items-center gap-2 rounded-md cursor-pointer select-none',
  variants: {
    variant: {
      default: '',
      ghost: 'ring-1'
    },
    color: {
      gray: ['bg-gray-500 ring-gray-500 text-white', 'hover:bg-gray-400'],
      blue: ['bg-blue-500 text-white', 'hover:bg-blue-400'],
      purple: ['bg-purple-500 text-white', 'hover:bg-purple-400'],
      orange: ['bg-orange-500 text-white', 'hover:bg-orange-400'],
      green: ['bg-green-500 text-white', 'hover:bg-green-400'],
      red: ['bg-red-500 text-white', 'hover:bg-red-400'],
      yellow: ['bg-yellow-400 text-gray-800', 'hover:bg-yellow-400']
    },
    size: {
      small: 'text-sm px-2 py-1',
      medium: 'text-md px-4 py-2',
      large: 'text-lg px-6 py-3'
    },
    disable: {
      unset: null,
      true: ['cursor-default bg-gray-200 text-gray-400', 'hover:bg-gray-200']
    }
  },
  compoundVariants: [
    {
      variant: 'ghost',
      className: 'bg-transparent'
    },
    {
      variant: 'ghost',
      color: 'gray',
      className: 'text-gray-500'
    },
    {
      variant: 'ghost',
      color: 'blue',
      className: 'text-blue-500'
    },
    {
      variant: 'ghost',
      color: 'purple',
      className: 'text-purple-500'
    }
  ],
  defaultVariants: {
    color: 'blue',
    size: 'medium'
  }
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, children, className, variant, color, size, disable, ...props },
    ref
  ) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({ variant, color, size, disable }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
