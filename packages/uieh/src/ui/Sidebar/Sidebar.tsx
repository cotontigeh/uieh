import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect
} from 'react'
import { cn } from '@/lib/utils'
import { sidebarVariants, SidebarVariantsType } from './sidebar.variants'

export type SidebarProps = React.HTMLAttributes<HTMLDivElement> &
  SidebarVariantsType & {
    /**
     * If `true`, the sidebar will be visible.
     * @default false
     */
    // todo: rename to hideScrollWhenOpened
    hideScrollWhenOpened?: boolean
  }

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      open,
      color,
      variant,
      className,
      hideScrollWhenOpened = false,
      children,
      ...props
    },
    ref
  ) => {
    // Clone children and pass the color prop to each one
    const childrenWithProps = Children.map(
      children as React.ReactElement<{ color?: string }>,
      (child) => {
        if (typeof child.type === 'string' || typeof child.type === 'symbol')
          return child

        if (isValidElement(child) && !child.props.color)
          return cloneElement(child, { color })
        return child
      }
    )

    useEffect(() => {
      if (!hideScrollWhenOpened) return

      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }, [hideScrollWhenOpened, open])

    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ open, color, variant }), className)}
        {...props}
      >
        {childrenWithProps}
      </div>
    )
  }
)

Sidebar.displayName = 'Sidebar'
