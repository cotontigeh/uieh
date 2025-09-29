import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { Container } from '../Container'

export type NavContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

export const NavContainer = forwardRef<HTMLDivElement, NavContainerProps>(
  ({ children, className, color, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Container asChild>
        <Component
          ref={ref}
          className={cn('flex gap-4 items-center h-full', className)}
          {...props}
        >
          {children}
        </Component>
      </Container>
    )
  }
)

NavContainer.displayName = 'NavContainer'
