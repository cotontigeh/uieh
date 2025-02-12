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
      pill: 'py-2 px-3 rounded-md'
    },
    active: {
      unset: null,
      true: [
        'text-blue-500 border-blue-500',
        'hover:border-blue-500 hover:text-blue-500'
      ]
    }
  },
  compoundVariants: [
    {
      variant: 'pill',
      active: true,
      className: 'bg-gray-100 text-slate-500 border-transparent'
    }
  ]
})

export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ asChild, className, active, variant, ...props }, ref) => {
    const Component = asChild ? Slot : 'a'
    return (
      <Component
        ref={ref}
        className={cn(tabLinkVariants({ active, variant }), className)}
        {...props}
      />
    )
  }
)
