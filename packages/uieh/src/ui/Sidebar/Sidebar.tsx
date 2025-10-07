import React, { forwardRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { sidebarVariants } from './sidebar.variants'
import type { SidebarVariants } from './sidebar.type'

export type SidebarProps = React.HTMLAttributes<HTMLDivElement> &
  SidebarVariants & {
    /**
     * If `true`, the sidebar will be visible.
     * @default false
     */
    hideScrollWhenOpened?: boolean
  }

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      open,
      color,
      variant,
      sticky,
      className,
      hideScrollWhenOpened = false,
      children,
      ...props
    },
    ref
  ) => {
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
        className={cn(
          sidebarVariants({ open, color, variant, sticky }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Sidebar.displayName = 'Sidebar'
