import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { inputVariants, InputVariantsType } from './input.variants'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  InputVariantsType & {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, size, color, className, disabled, ...props }, ref) => {
    return (
      <input
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
