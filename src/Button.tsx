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
      yellow: ['bg-yellow-400 text-gray-800', 'hover:bg-yellow-400'],
      slate: ['bg-slate-400 text-white', 'hover:bg-slate-400'],
      lime: ['bg-lime-400 text-white', 'hover:bg-lime-400'],
      rose: ['bg-rose-400 text-white', 'hover:bg-rose-400'],
      pink: ['bg-pink-400 text-white', 'hover:bg-pink-400'],
      zinc: ['bg-zinc-400 text-white', 'hover:bg-zinc-400'],
      indigo: ['bg-indigo-400 text-white', 'hover:bg-indigo-400'],
      violet: ['bg-violet-400 text-white', 'hover:bg-violet-400']
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
      className: ['text-gray-500', 'hover:bg-gray-100']
    },
    {
      variant: 'ghost',
      color: 'blue',
      className: ['text-blue-500', 'hover:bg-blue-100']
    },
    {
      variant: 'ghost',
      color: 'purple',
      className: ['text-purple-500', 'hover:bg-purple-100']
    },
    {
      variant: 'ghost',
      color: 'orange',
      className: ['text-orange-500', 'hover:bg-orange-100']
    },
    {
      variant: 'ghost',
      color: 'green',
      className: ['text-green-500', 'hover:bg-green-100']
    },
    {
      variant: 'ghost',
      color: 'red',
      className: ['text-red-500', 'hover:bg-red-100']
    },
    {
      variant: 'ghost',
      color: 'yellow',
      className: ['text-yellow-600 ring-yellow-500', 'hover:bg-yellow-100']
    },
    {
      variant: 'ghost',
      color: 'slate',
      className: ['text-slate-600', 'hover:bg-slate-100']
    },
    {
      variant: 'ghost',
      color: 'lime',
      className: ['text-lime-600', 'hover:bg-lime-100']
    },
    {
      variant: 'ghost',
      color: 'rose',
      className: ['text-rose-600', 'hover:bg-rose-100']
    },
    {
      variant: 'ghost',
      color: 'pink',
      className: ['text-pink-600', 'hover:bg-pink-100']
    },
    {
      variant: 'ghost',
      color: 'zinc',
      className: ['text-zinc-600', 'hover:bg-zinc-100']
    },
    {
      variant: 'ghost',
      color: 'indigo',
      className: ['text-indigo-600', 'hover:bg-indigo-100']
    },
    {
      variant: 'ghost',
      color: 'violet',
      className: ['text-violet-600', 'hover:bg-violet-100']
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
