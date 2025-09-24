import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { cardHeaderVariants } from './cardHeader.variant'

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardHeaderVariants> & {
    asChild?: boolean
  }

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ asChild, children, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'header'

    return (
      <Component
        ref={ref}
        className={cn(cardHeaderVariants({}), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

CardHeader.displayName = 'CardHeader'
