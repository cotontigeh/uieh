import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { cardContentVariants } from './cardContent.variant'

export type CardContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardContentVariants> & {
    asChild?: boolean
  }

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ asChild, children, className, noBorder, variant, ...props }, ref) => {
    const Component = asChild ? Slot : 'article'

    return (
      <Component
        ref={ref}
        className={cn(cardContentVariants({ noBorder, variant }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

CardContent.displayName = 'CardContent'
