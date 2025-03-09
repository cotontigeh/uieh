import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export type BackdropProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean
}

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ className, open = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          open ? 'block' : 'hidden',
          'fixed z-0 top-0 left-0 w-full h-full bg-black/70',
          className
        )}
        {...props}
      />
    )
  }
)

Backdrop.displayName = 'Backdrop'
