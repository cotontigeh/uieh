import {
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
    hideScrollWhenOpened?: boolean
    children:
      | React.ReactElement<{ mobile?: boolean; color?: string }>
      | React.ReactElement<{ mobile?: boolean; color?: string }>[]
  }

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      open,
      color,
      className,
      hideScrollWhenOpened = false,
      children,
      ...props
    },
    ref
  ) => {
    // Clone children and pass the color prop to each one
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child) && !child.props.mobile)
        return cloneElement(child, { mobile: true, color })
      return child
    })

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
        className={cn(sidebarVariants({ open, color }), className)}
        {...props}
      >
        {childrenWithProps}
      </div>
    )
  }
)

Sidebar.displayName = 'Sidebar'
