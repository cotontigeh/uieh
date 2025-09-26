import { forwardRef } from 'react'
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

    return (
      <Container asChild>
        <Component
          ref={ref}
          className={cn(navContainerVariants({ color }), className)}
          {...props}
        >
          {children}
        </Component>
      </Container>
    )
  }
)

NavContainer.displayName = 'NavContainer'
