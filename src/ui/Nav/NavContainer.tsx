import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export type NavContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

export const NavContainer = forwardRef<HTMLDivElement, NavContainerProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={cn('flex gap-4 items-center h-full', className)}
        {...props}
      />
    )
  }
)

NavContainer.displayName = 'NavContainer'
