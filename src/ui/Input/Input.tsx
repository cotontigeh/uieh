import { Input as HuInput, InputProps as HuInputProps } from '@headlessui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { inputVariants, InputVariantsType } from './input.variants'

export type InputProps = Omit<HuInputProps, 'size' | 'as'> &
  InputVariantsType & {
    as?: React.ElementType
  }

export const Input = forwardRef<React.ComponentRef<typeof HuInput>, InputProps>(
  ({ variant, size, color, className, disabled, ...props }, ref) => {
    return (
      <HuInput
        ref={ref}
        disabled={disabled}
        className={cn(
          inputVariants({ variant, size, color, disabled }),
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
