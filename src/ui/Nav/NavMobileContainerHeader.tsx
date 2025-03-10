import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import {
  navMobileContainerHeaderVariants,
  NavMobileContainerHeaderVariantsType
} from './navMobileContainerHeader.variants'

export type NavMobileContainerHeaderProps =
  React.HTMLAttributes<HTMLDivElement> &
    NavMobileContainerHeaderVariantsType & {
      asChild?: boolean
    }

export const NavMobileContainerHeader = forwardRef<
  HTMLDivElement,
  NavMobileContainerHeaderProps
>(({ variant, className, asChild, ...props }, ref) => {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      ref={ref}
      className={cn(navMobileContainerHeaderVariants({ variant }), className)}
      {...props}
    />
  )
})

NavMobileContainerHeader.displayName = 'NavMobileContainerHeader'
