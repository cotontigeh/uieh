import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { navLinkVariants, NavLinkVariantsType } from './navLink.variants'

export type NavLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  NavLinkVariantsType & {
    asChild?: boolean
  }

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ variant, active, className, mobile, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'a'

    return (
      <Component
        ref={ref}
        className={cn(navLinkVariants({ variant, active, mobile }), className)}
        {...props}
      />
    )
  }
)

NavLink.displayName = 'NavLink'
