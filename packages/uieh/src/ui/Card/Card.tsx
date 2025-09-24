import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { cardVariants } from './card.variants'

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean
  }

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ asChild, children, className, variant, shadow, ...props }, ref) => {
    const Component = asChild ? Slot : 'section'

    return (
      <Component
        ref={ref}
        className={cn(cardVariants({ variant, shadow }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Card.displayName = 'Card'
