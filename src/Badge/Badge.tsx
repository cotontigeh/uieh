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
      default: 'rounded-md',
      dotted:
        'rounded-md before:w-2 before:h-2 before:rounded-full before:mr-1.5',
      rounded: 'rounded-xl'
    },
    color: {
      gray: 'bg-gray-50 text-gray-600 ring-gray-500/10 before:bg-gray-500',
      blue: 'bg-blue-50 text-blue-600 ring-blue-500/10 before:bg-blue-500',
      purple:
        'bg-purple-50 text-purple-600 ring-purple-500/10 before:bg-purple-500',
      orange:
        'bg-orange-50 text-orange-600 ring-orange-500/10 before:bg-orange-500',
      green: 'bg-green-50 text-green-600 ring-green-500/10 before:bg-green-500',
      red: 'bg-red-50 text-red-600 ring-red-500/10 before:bg-red-500',
      yellow:
        'bg-yellow-50 text-yellow-600 ring-yellow-500/10 before:bg-yellow-500',
      slate: 'bg-slate-50 text-slate-600 ring-slate-500/10 before:bg-slate-500',
      lime: 'bg-lime-50 text-lime-600 ring-lime-500/10 before:bg-lime-500',
      rose: 'bg-rose-50 text-rose-600 ring-rose-500/10 before:bg-rose-500',
      pink: 'bg-pink-50 text-pink-600 ring-pink-500/10 before:bg-pink-500',
      zinc: 'bg-zinc-50 text-zinc-600 ring-zinc-500/10 before:bg-zinc-500',
      indigo:
        'bg-indigo-50 text-indigo-600 ring-indigo-500/10 before:bg-indigo-500',
      violet:
        'bg-violet-50 text-violet-600 ring-violet-500/10 before:bg-violet-500',
      amber: 'bg-amber-50 text-amber-600 ring-amber-500/10 before:bg-amber-500',
      cyan: 'bg-cyan-50 text-cyan-600 ring-cyan-500/10 before:bg-cyan-500',
      teal: 'bg-teal-50 text-teal-600 ring-teal-500/10 before:bg-teal-500',
      emerald:
        'bg-emerald-50 text-emerald-600 ring-emerald-500/10 before:bg-emerald-500',
      sky: 'bg-sky-50 text-sky-600 ring-sky-500/10 before:bg-sky-500',
      fuchsia:
        'bg-fuchsia-50 text-fuchsia-600 ring-fuchsia-500/10 before:bg-fuchsia-500',
      neutral:
        'bg-neutral-50 text-neutral-600 ring-neutral-500/10 before:bg-neutral-500',
      stone: 'bg-stone-50 text-stone-600 ring-stone-500/10 before:bg-stone-500'
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
      variant: 'default',
      color: 'gray',
      clickable: true,
      className: 'hover:bg-gray-100 hover:ring-gray-500/30'
    },
    {
      variant: 'default',
      color: 'blue',
      clickable: true,
      className: 'hover:bg-blue-100 hover:ring-blue-500/30'
    },
    {
      variant: 'default',
      color: 'purple',
      clickable: true,
      className: 'hover:bg-purple-100 hover:ring-purle-900'
    },
    {
      variant: 'default',
      color: 'orange',
      clickable: true,
      className: 'hover:bg-orange-100 hover:ring-orange-500/30'
    },
    {
      variant: 'default',
      color: 'green',
      clickable: true,
      className: 'hover:bg-green-100 hover:ring-green-500/30'
    },
    {
      variant: 'default',
      color: 'red',
      clickable: true,
      className: 'hover:bg-red-100 hover:ring-red-500/30'
    },
    {
      variant: 'default',
      color: 'yellow',
      clickable: true,
      className: 'hover:bg-yellow-100 hover:ring-yellow-500'
    },
    {
      variant: 'default',
      color: 'slate',
      clickable: true,
      className: 'hover:bg-slate-100 hover:ring-slate-500'
    },
    {
      variant: 'default',
      color: 'lime',
      clickable: true,
      className: 'hover:bg-lime-100 hover:ring-lime-500'
    },
    {
      variant: 'default',
      color: 'rose',
      clickable: true,
      className: 'hover:bg-rose-100 hover:ring-rose-500'
    },
    {
      variant: 'default',
      color: 'pink',
      clickable: true,
      className: 'hover:bg-pink-100 hover:ring-pink-500'
    },
    {
      variant: 'default',
      color: 'zinc',
      clickable: true,
      className: 'hover:bg-zinc-100 hover:ring-zinc-500'
    },
    {
      variant: 'default',
      color: 'indigo',
      clickable: true,
      className: 'hover:bg-indigo-100 hover:ring-indigo-500'
    },
    {
      variant: 'default',
      color: 'violet',
      clickable: true,
      className: 'hover:bg-violet-100 hover:ring-violet-500'
    },
    {
      variant: 'default',
      color: 'amber',
      clickable: true,
      className: 'hover:bg-amber-100 hover:ring-amber-500'
    },
    {
      variant: 'default',
      color: 'cyan',
      clickable: true,
      className: 'hover:bg-cyan-100 hover:ring-cyan-500'
    },
    {
      variant: 'default',
      color: 'teal',
      clickable: true,
      className: 'hover:bg-teal-100 hover:ring-teal-500'
    },
    {
      variant: 'default',
      color: 'emerald',
      clickable: true,
      className: 'hover:bg-emerald-100 hover:ring-emerald-500'
    },
    {
      variant: 'default',
      color: 'sky',
      clickable: true,
      className: 'hover:bg-sky-100 hover:ring-sky-500'
    },
    {
      variant: 'default',
      color: 'fuchsia',
      clickable: true,
      className: 'hover:bg-fuchsia-100 hover:ring-fuchsia-500'
    },
    {
      variant: 'default',
      color: 'neutral',
      clickable: true,
      className: 'hover:bg-neutral-100 hover:ring-neutral-500'
    },
    {
      variant: 'default',
      color: 'stone',
      clickable: true,
      className: 'hover:bg-stone-100 hover:ring-stone-500'
    },
    // Variant dotted
    {
      variant: 'dotted',
      className: 'bg-transparent ring-gray-300 text-gray-500'
    },
    {
      variant: 'dotted',
      color: 'gray',
      clickable: true,
      className: 'hover:ring-gray-500/30'
    },
    {
      variant: 'dotted',
      color: 'blue',
      clickable: true,
      className: 'hover:ring-blue-500/30'
    },
    {
      variant: 'dotted',
      color: 'purple',
      clickable: true,
      className: 'hover:ring-purle-900'
    },
    {
      variant: 'dotted',
      color: 'orange',
      clickable: true,
      className: 'hover:ring-orange-500/30'
    },
    {
      variant: 'dotted',
      color: 'green',
      clickable: true,
      className: 'hover:ring-green-500/30'
    },
    {
      variant: 'dotted',
      color: 'red',
      clickable: true,
      className: 'hover:ring-red-500/30'
    },
    {
      variant: 'dotted',
      color: 'yellow',
      clickable: true,
      className: 'hover:ring-yellow-500'
    },
    {
      variant: 'dotted',
      color: 'slate',
      clickable: true,
      className: 'hover:ring-slate-500'
    },
    {
      variant: 'dotted',
      color: 'lime',
      clickable: true,
      className: 'hover:ring-lime-500'
    },
    {
      variant: 'dotted',
      color: 'rose',
      clickable: true,
      className: 'hover:ring-rose-500'
    },
    {
      variant: 'dotted',
      color: 'pink',
      clickable: true,
      className: 'hover:ring-pink-500'
    },
    {
      variant: 'dotted',
      color: 'zinc',
      clickable: true,
      className: 'hover:ring-zinc-500'
    },
    {
      variant: 'dotted',
      color: 'indigo',
      clickable: true,
      className: 'hover:ring-indigo-500'
    },
    {
      variant: 'dotted',
      color: 'violet',
      clickable: true,
      className: 'hover:ring-violet-500'
    },
    {
      variant: 'dotted',
      color: 'amber',
      clickable: true,
      className: 'hover:ring-amber-500'
    },
    {
      variant: 'dotted',
      color: 'cyan',
      clickable: true,
      className: 'hover:ring-cyan-500'
    },
    {
      variant: 'dotted',
      color: 'teal',
      clickable: true,
      className: 'hover:ring-teal-500'
    },
    {
      variant: 'dotted',
      color: 'emerald',
      clickable: true,
      className: 'hover:ring-emerald-500'
    },
    {
      variant: 'dotted',
      color: 'sky',
      clickable: true,
      className: 'hover:ring-sky-500'
    },
    {
      variant: 'dotted',
      color: 'fuchsia',
      clickable: true,
      className: 'hover:ring-fuchsia-500'
    },
    {
      variant: 'dotted',
      color: 'neutral',
      clickable: true,
      className: 'hover:ring-neutral-500'
    },
    {
      variant: 'dotted',
      color: 'stone',
      clickable: true,
      className: 'hover:ring-stone-500'
    },
    // Variant rounded
    {
      variant: 'rounded',
      className: 'px-2 py-0.5'
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
