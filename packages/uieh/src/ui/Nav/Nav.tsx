import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { navVariants, NavVariantsType } from './nav.variants'

export type NavProps = React.HTMLAttributes<HTMLDivElement> &
  NavVariantsType & {
    asChild?: boolean
  }

export const Nav = forwardRef<HTMLDivElement, NavProps>(
  (
    { children, variant, size, sticky, color, className, asChild, ...props },
    ref
  ) => {
    const Component = asChild ? Slot : 'nav'

    return (
      <Component
        ref={ref}
        className={cn(navVariants({ variant, size, sticky, color }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Nav.displayName = 'Nav'
