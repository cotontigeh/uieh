import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={cn('container mx-auto px-8 lg:px-0', className)}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'
