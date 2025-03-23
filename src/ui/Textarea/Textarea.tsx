import { Textarea as HuTextarea } from '@headlessui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { textareaVariants, TextareaVariantsType } from './textarea.variants'

export type TextareaProps = React.ComponentPropsWithoutRef<typeof HuTextarea> &
  TextareaVariantsType & {
    placeholder?: string
    rows?: number
  }

export const Textarea = forwardRef<
  React.ComponentRef<typeof HuTextarea>,
  TextareaProps
>(({ variant, color, className, disabled, ...props }, ref) => {
  return (
    <HuTextarea
      ref={ref}
      disabled={disabled}
      className={cn(textareaVariants({ variant, color, disabled }), className)}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
