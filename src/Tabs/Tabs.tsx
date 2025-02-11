import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'cva'
import { forwardRef } from 'react'

export type TabsProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof tabsVariants>

const tabsVariants = cva({
  base: ['flex gap-4', 'border-b-1 border-slate-200'],
  variants: {
    variant: {
      noBorder: 'border-transparent'
    }
  }
})

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(tabsVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
