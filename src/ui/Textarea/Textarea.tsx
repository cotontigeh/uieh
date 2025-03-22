import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { textareaVariants, TextareaVariantsType } from './textarea.variants'

export type TextareaProps = Omit<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  'size'
> &
  TextareaVariantsType & {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, color, className, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          textareaVariants({ variant, color, disabled }),
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
