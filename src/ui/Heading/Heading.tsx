import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { headingVariants, HeadingVariantsType } from './heading.variants'
import { Slot } from '@radix-ui/react-slot'

export type TitleProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  'size'
> &
  HeadingVariantsType & {
    asChild?: boolean
  }

export const Heading = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ variant, uppercase, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'h1'

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
