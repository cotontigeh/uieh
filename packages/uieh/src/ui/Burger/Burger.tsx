import React from 'react'
import { burgerVariants, burgerLineVariants } from './burger.variants'
import { VariantProps } from 'cva'
import { cn } from '@/lib/utils'

export type BurgerProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof burgerVariants> & {
    isOpen?: boolean
  }

export const Burger = React.forwardRef<HTMLButtonElement, BurgerProps>(
  ({ className, color, size, disable, isOpen = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(burgerVariants({ color, size, disable }), className)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        {...props}
      >
        <span
          className={burgerLineVariants({
            size,
            isOpen,
            className: 'top-0' + (isOpen ? ' rotate-45' : '')
          })}
        />
        <span
          className={burgerLineVariants({
            size,
            isOpen,
            className: 'top-1/2 -translate-y-1/2' + (isOpen ? ' opacity-0' : '')
          })}
        />
        <span
          className={burgerLineVariants({
            size,
            isOpen,
            className:
              'bottom-0' +
              (isOpen ? ' -rotate-45 top-1/2 -translate-y-1/2' : '')
          })}
        />
      </button>
    )
  }
)

Burger.displayName = 'Burger'
