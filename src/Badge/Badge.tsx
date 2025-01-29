import { forwardRef, isValidElement } from 'react'
import { cva, type VariantProps } from 'cva'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import CloseIcon from '@/icons/X'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  Omit<VariantProps<typeof badgeVariants>, 'clickable'> & {
    color?: string
    asChild?: boolean
    onDissmissClick?: () => void
  }

const badgeVariants = cva({
  base: 'inline-flex items-center ring-1 ring-inset select-none',
  variants: {
    variant: {
      default: ['rounded-md'],
      dotted: [
        'rounded-md before:w-2 before:h-2 before:rounded-full before:mr-1.5'
      ]
    },
    color: {
      gray: ['bg-gray-50 text-gray-600 ring-gray-500/10 before:bg-gray-500'],
      blue: ['bg-blue-50 text-blue-600 ring-blue-500/10 before:bg-blue-500'],
      purple: [
        'bg-purple-50 text-purple-600 ring-purple-500/10 before:bg-purple-500'
      ],
      orange: [
        'bg-orange-50 text-orange-600 ring-orange-500/10 before:bg-orange-500'
      ],
      green: [
        'bg-green-50 text-green-600 ring-green-500/10 before:bg-green-500'
      ],
      red: ['bg-red-50 text-red-600 ring-red-500/10 before:bg-red-500'],
      yellow: [
        'bg-yellow-50 text-yellow-600 ring-yellow-500/10 before:bg-yellow-500'
      ]
    },
    size: {
      small: ['px-2 py-1 text-xs font-medium'],
      medium: ['px-2 py-1 text-md font-medium'],
      large: ['px-2 py-1 text-lg font-medium']
    },
    clickable: {
      unset: null,
      true: ['cursor-pointer']
    },
    dissmissable: {
      unset: null,
      true: []
    }
  },
  compoundVariants: [
    // Variant default
    {
      color: 'gray',
      clickable: true,
      className: 'hover:bg-gray-100 hover:ring-gray-500/30'
    },
    {
      color: 'blue',
      clickable: true,
      className: 'hover:bg-blue-100 hover:ring-blue-500/30'
    },
    {
      color: 'purple',
      clickable: true,
      className: 'hover:bg-purple-100 hover:ring-purle-900'
    },
    {
      color: 'orange',
      clickable: true,
      className: 'hover:bg-orange-100 hover:ring-orange-500/30'
    },
    {
      color: 'green',
      clickable: true,
      className: 'hover:bg-green-100 hover:ring-green-500/30'
    },
    {
      color: 'red',
      clickable: true,
      className: 'hover:bg-red-100 hover:ring-red-500/30'
    },
    {
      color: 'yellow',
      clickable: true,
      className: 'hover:bg-yellow-100 hover:ring-yellow-500'
    },
    // Variant dotted
    {
      variant: 'dotted',
      className: 'bg-transparent ring-gray-300 text-gray-500'
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'gray',
    size: 'medium'
  }
})

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
