import { Children, cloneElement, forwardRef, isValidElement } from 'react'
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

    // Clone children and pass the color prop to each one
    const childrenWithProps = Children.map(
      children as React.ReactElement<{ color?: string }>,
      (child) => {
        if (isValidElement(child) && !child.props.color)
          return cloneElement(child, { color })
        return child
      }
    )

    return (
      <Component
        ref={ref}
        className={cn(navVariants({ variant, size, sticky, color }), className)}
        {...props}
      >
        {childrenWithProps}
      </Component>
    )
  }
)

Nav.displayName = 'Nav'
