import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect
} from 'react'
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

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
