import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '@/lib/utils'
import {
  navLinksMobileContainerVariants,
  NavLinksMobileContainerVariantsType
} from './navLinksMobileContainer.variants'

export type NavLinksMobileContainerProps =
  React.HTMLAttributes<HTMLDivElement> &
    NavLinksMobileContainerVariantsType & {
      children:
        | React.ReactElement<{ mobile?: boolean }>
        | React.ReactElement<{ mobile?: boolean }>[]
    }

export const NavLinksMobileContainer = forwardRef<
  HTMLDivElement,
  NavLinksMobileContainerProps
>(({ open, className, children, ...props }, ref) => {
  // Clone children and pass the color prop to each one
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child) && !child.props.mobile)
      return cloneElement(child, { mobile: true })
    return child
  })

  return (
    <div
      ref={ref}
      className={cn(navLinksMobileContainerVariants({ open }), className)}
      {...props}
    >
      {childrenWithProps}
    </div>
  )
})

NavLinksMobileContainer.displayName = 'NavLinksMobileContainer'
