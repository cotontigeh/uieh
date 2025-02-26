import { forwardRef, isValidElement } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import CloseIcon from '@/icons/X'
import { badgeVariants, BadgeVariantsType } from './badge.variants'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  BadgeVariantsType & {
    color?: string
    asChild?: boolean
    onDissmissClick?: () => void
  }

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant,
      color,
      size,
      className,
      asChild,
      dissmissable,
      onClick,
      onDissmissClick,
      ...props
    },
    ref
  ) => {
    const Component = asChild && !dissmissable ? Slot : 'span'
    const closeIconSize = size === 'small' ? 12 : size === 'large' ? 18 : 16
    const clickable =
      typeof onClick !== 'undefined' ||
      (isValidElement(children) && children.type === 'a')

    return (
      <Component
        ref={ref}
        onClick={onClick}
        className={cn(
          badgeVariants({ variant, color, size, clickable }),
          className
        )}
        {...props}
      >
        {dissmissable ? (
          <>
            {children}
            <CloseIcon
              onClick={onDissmissClick}
              className="ml-1.5 cursor-pointer hover:fill-gray-900"
              size={closeIconSize}
            />
          </>
        ) : (
          children
        )}
      </Component>
    )
  }
)
