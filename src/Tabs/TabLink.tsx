import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'cva'
import { forwardRef } from 'react'

export type TabLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof tabLinkVariants> & {
    asChild?: boolean
  }

const tabLinkVariants = cva({
  base: [
    'flex gap-2 items-center text-slate-500 font-medium cursor-pointer',
    'border-b-2 border-transparent',
    'py-4 px-1.5',
    'hover:text-slate-600 hover:border-slate-300'
  ],
  variants: {
    variant: {
      pill: [
        'py-2 px-3 rounded-md',
        'hover:border-transparent hover:bg-gray-100'
      ]
    },
    color: {
      gray: '',
      blue: '',
      purple: '',
      orange: '',
      green: '',
      red: '',
      yellow: '',
      slate: '',
      lime: '',
      rose: '',
      pink: '',
      zinc: '',
      indigo: '',
      violet: '',
      amber: '',
      cyan: '',
      teal: '',
      emerald: '',
      sky: '',
      fuchsia: '',
      neutral: '',
      stone: ''
    },
    active: {
      unset: null,
      true: ''
    }
  },
  compoundVariants: [
    // Colors
    {
      color: 'gray',
      active: true,
      className: [
        'text-gray-500 border-gray-500',
        'hover:border-gray-500 hover:text-gray-500'
      ]
    },
    {
      color: 'blue',
      active: true,
      className: [
        'text-blue-500 border-blue-500',
        'hover:border-blue-500 hover:text-blue-500'
      ]
    },
    {
      color: 'purple',
      active: true,
      className: [
        'text-purple-500 border-purple-500',
        'hover:border-purple-500 hover:text-purple-500'
      ]
    },
    {
      color: 'orange',
      active: true,
      className: [
        'text-orange-500 border-orange-500',
        'hover:border-orange-500 hover:text-orange-500'
      ]
    },
    {
      color: 'green',
      active: true,
      className: [
        'text-green-500 border-green-500',
        'hover:border-green-500 hover:text-green-500'
      ]
    },
    {
      color: 'red',
      active: true,
      className: [
        'text-red-500 border-red-500',
        'hover:border-red-500 hover:text-red-500'
      ]
    },
    {
      color: 'yellow',
      active: true,
      className: [
        'text-yellow-500 border-yellow-500',
        'hover:border-yellow-500 hover:text-yellow-500'
      ]
    },
    {
      color: 'slate',
      active: true,
      className: [
        'text-slate-500 border-slate-500',
        'hover:border-slate-300 hover:text-slate-600'
      ]
    },
    {
      color: 'lime',
      active: true,
      className: [
        'text-lime-500 border-lime-500',
        'hover:border-lime-500 hover:text-lime-500'
      ]
    },
    {
      color: 'rose',
      active: true,
      className: [
        'text-rose-500 border-rose-500',
        'hover:border-rose-500 hover:text-rose-500'
      ]
    },
    {
      color: 'pink',
      active: true,
      className: [
        'text-pink-600 border-pink-500',
        'hover:border-pink-500 hover:text-pink-500'
      ]
    },
    {
      color: 'zinc',
      active: true,
      className: [
        'text-zinc-500 border-zinc-500',
        'hover:border-zinc-500 hover:text-zinc-500'
      ]
    },
    {
      color: 'indigo',
      active: true,
      className: [
        'text-indigo-500 border-indigo-500',
        'hover:border-indigo-500 hover:text-indigo-500'
      ]
    },
    {
      color: 'violet',
      active: true,
      className: [
        'text-violet-500 border-violet-500',
        'hover:border-violet-500 hover:text-violet-500'
      ]
    },
    {
      color: 'amber',
      active: true,
      className: [
        'text-amber-500 border-amber-500',
        'hover:border-amber-500 hover:text-amber-500'
      ]
    },
    {
      color: 'cyan',
      active: true,
      className: [
        'text-cyan-500 border-cyan-500',
        'hover:border-cyan-500 hover:text-cyan-500'
      ]
    },
    {
      color: 'teal',
      active: true,
      className: [
        'text-teal-500 border-teal-500',
        'hover:border-teal-500 hover:text-teal-500'
      ]
    },
    {
      color: 'emerald',
      active: true,
      className: [
        'text-emerald-500 border-emerald-500',
        'hover:border-emerald-500 hover:text-emerald-500'
      ]
    },
    {
      color: 'sky',
      active: true,
      className: [
        'text-sky-500 border-sky-500',
        'hover:border-sky-500 hover:text-sky-500'
      ]
    },
    {
      color: 'fuchsia',
      active: true,
      className: [
        'text-fuchsia-500 border-fuchsia-500',
        'hover:border-fuchsia-500 hover:text-fuchsia-500'
      ]
    },
    {
      color: 'neutral',
      active: true,
      className: [
        'text-neutral-500 border-neutral-500',
        'hover:border-neutral-500 hover:text-neutral-500'
      ]
    },
    {
      color: 'stone',
      active: true,
      className: [
        'text-stone-500 border-stone-500',
        'hover:border-stone-500 hover:text-stone-500'
      ]
    },
    // Variants
    {
      variant: 'pill',
      active: true,
      className: [
        'bg-gray-100 text-slate-500 border-transparent',
        'hover:text-slate-500 hover:border-transparent'
      ]
    }
  ],
  defaultVariants: {
    color: 'slate'
  }
})

export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ asChild, className, active, variant, color, ...props }, ref) => {
    const Component = asChild ? Slot : 'a'
    return (
      <Component
        ref={ref}
        className={cn(tabLinkVariants({ active, variant, color }), className)}
        {...props}
      />
    )
  }
)
