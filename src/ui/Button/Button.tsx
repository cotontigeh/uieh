import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'cva'
import { forwardRef } from 'react'
import { buttonVariants } from './button.variants'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

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

Button.displayName = 'Button'
