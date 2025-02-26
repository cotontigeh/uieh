import { cn } from '@/lib/utils'
import { VariantProps } from 'cva'
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement
} from 'react'
import { tabsVariants } from './tabs.variants'

export type TabsProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof tabsVariants> & {
    children:
      | React.ReactElement<{ color?: string }>
      | React.ReactElement<{ color?: string }>[]
  }

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, variant, color, ...props }, ref) => {
    // Clone children and pass the color prop to each one
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child) && !child.props.color)
        return cloneElement(child, { color })
      return child
    })

    return (
      <nav
        ref={ref}
        className={cn(tabsVariants({ variant }), className)}
        {...props}
      >
        {childrenWithProps}
      </nav>
    )
  }
)
