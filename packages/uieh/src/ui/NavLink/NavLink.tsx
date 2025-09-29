import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { navLinkVariants } from './navLink.variants'
import { NavLinkVariants } from './navLink.type'

export type NavLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  NavLinkVariants & {
    asChild?: boolean
    href?: string
  }

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { variant, color, active, className, fullWidth, asChild, ...props },
    ref
  ) => {
    const Component = asChild ? Slot : 'a'
    return (
      <Component
        ref={ref}
        className={cn(
          navLinkVariants({ variant, active, fullWidth, color }),
          className
        )}
        {...props}
      />
    )
  }
)

NavLink.displayName = 'NavLink'
