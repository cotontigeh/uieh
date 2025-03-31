import {
  Select as HuSelect,
  SelectProps as HuSelectProps
} from '@headlessui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { selectVariants, SelectVariantsType } from './select.variants'
import { ChevronDownIcon } from '../icons'

export type SelectProps = Omit<HuSelectProps, 'size' | 'as'> &
  SelectVariantsType & {
    as?: React.ElementType
  }

export const Select = forwardRef<
  React.ComponentRef<typeof HuSelect>,
  SelectProps
>(({ variant, size, color, className, disabled, ...props }, ref) => {
  return (
    <div className="relative">
      <HuSelect
        ref={ref}
        disabled={disabled}
        className={cn(
          selectVariants({ variant, size, color, disabled }),
          className
        )}
        {...props}
      />
      <ChevronDownIcon
        className="group pointer-events-none absolute top-4 right-4 size-4"
        aria-hidden="true"
      />
    </div>
  )
})

Select.displayName = 'Select'
