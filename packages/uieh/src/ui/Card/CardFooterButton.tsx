import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { cardFooterButtonVariants } from './cardFooterButton.variant'

export type CardFooterButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cardFooterButtonVariants> & {
    asChild?: boolean
  }

export const CardFooterButton = forwardRef<
  HTMLButtonElement,
  CardFooterButtonProps
>(({ asChild, children, className, variant, color, ...props }, ref) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      ref={ref}
      className={cn(cardFooterButtonVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </Component>
  )
})

CardFooterButton.displayName = 'CardFooterButton'
