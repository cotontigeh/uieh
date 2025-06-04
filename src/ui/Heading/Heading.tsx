import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { headingVariants, HeadingVariantsType } from './heading.variants'
import { Slot } from '@radix-ui/react-slot'

export type HeadingProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  'size'
> &
  HeadingVariantsType & {
    asChild?: boolean
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ variant = 'h1', uppercase, className, asChild, as, ...props }, ref) => {
    const tag = as || 'h1'
    const Component = asChild ? Slot : tag

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant, uppercase }), className)}
        {...props}
      />
    )
  }
)

Heading.displayName = 'Heading'
