import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { Container } from '../Container'
import {
  navContainerVariants,
  NavContainerVariantsType
} from './navContainer.variants'

export type NavContainerProps = React.HTMLAttributes<HTMLDivElement> &
  NavContainerVariantsType & {
    asChild?: boolean
  }

export const NavContainer = forwardRef<HTMLDivElement, NavContainerProps>(
  ({ children, className, color, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'
    // Clone children and pass the color prop to each one
    const childrenWithProps = Children.map(
      children as React.ReactElement<{ color?: string }>,
      (child) => {
        if (typeof child.type === 'string' || typeof child.type === 'symbol')
          return child

        if ('displayName' in child.type && child.type.displayName !== 'NavLink')
          return child

        if (isValidElement(child) && !child.props.color)
          return cloneElement(child, { color })

        return child
      }
    )

    return (
      <Container asChild>
        <Component
          ref={ref}
          className={cn(navContainerVariants({ color }), className)}
          {...props}
        >
          {childrenWithProps}
        </Component>
      </Container>
    )
  }
)

NavContainer.displayName = 'NavContainer'
