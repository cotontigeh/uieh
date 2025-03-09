import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { navVariants, NavVariantsType } from './nav.variants'

export type NavProps = React.HTMLAttributes<HTMLDivElement> &
  NavVariantsType & {
    asChild?: boolean
  }

export const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ variant, size, sticky, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'nav'

    return (
      <Component
        ref={ref}
        className={cn(navVariants({ variant, size, sticky }), className)}
        {...props}
      />
    )
  }
)

Nav.displayName = 'Nav'
