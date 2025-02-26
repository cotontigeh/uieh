import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { tabLinkVariants } from './tabLink.variants'

export type TabLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof tabLinkVariants> & {
    asChild?: boolean
  }

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
