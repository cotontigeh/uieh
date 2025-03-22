import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { titleVariants, TitleVariantsType } from './title.variants'
import { Slot } from '@radix-ui/react-slot'

export type TitleProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  'size'
> &
  TitleVariantsType & {
    asChild?: boolean
  }

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ variant, uppercase, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'h1'

    return (
      <Component
        ref={ref}
        className={cn(titleVariants({ variant, uppercase }), className)}
        {...props}
      />
    )
  }
)

Title.displayName = 'Title'
