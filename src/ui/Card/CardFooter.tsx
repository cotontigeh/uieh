import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { cardFooterVariants } from './cardFooter.variant'

export type CardFooterProps = React.HTMLAttributes<
  HTMLDivElement | HTMLButtonElement
> &
  VariantProps<typeof cardFooterVariants> & {
    asChild?: boolean
  }

export const CardFooter = forwardRef<
  HTMLDivElement | HTMLButtonElement,
  CardFooterProps
>(({ asChild, children, className, variant, color, ...props }, ref) => {
  const tag = variant === 'button' ? 'button' : 'footer'
  const Component = asChild ? Slot : tag

  return (
    <Component
      // @ts-expect-error - ref is not typed correctly
      ref={ref}
      className={cn(cardFooterVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </Component>
  )
})

CardFooter.displayName = 'CardFooter'
