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
    children:
      | React.ReactElement<{ color?: string }>
      | React.ReactElement<{ color?: string }>[]
  }

export const NavContainer = forwardRef<HTMLDivElement, NavContainerProps>(
  ({ children, className, color, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'

    // Clone children and pass the color prop to each one
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child) && !child.props.color)
        return cloneElement(child, { color })
      return child
    })

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
