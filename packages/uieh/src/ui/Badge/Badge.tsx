import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { badgeVariants, BadgeVariantsType } from './badge.variants'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  BadgeVariantsType & {
    asChild?: boolean
  }

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, color, size, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'span'

    return (
      <Component
        ref={ref}
        className={cn(badgeVariants({ variant, color, size }), className)}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
