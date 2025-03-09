import { cva, VariantProps } from 'cva'

export type NavVariantsType = VariantProps<typeof navVariants>

export const navVariants = cva({
  base: 'border-b border-transparent',
  variants: {
    variant: {
      default: [
        'bg-base-100 border-base-300',
        'dark:bg-base-100-dark dark:border-base-300-dark'
      ]
    },
    size: {
      small: 'h-15',
      medium: 'h-20',
      large: 'h-30'
    },
    sticky: {
      unset: null,
      true: 'sticky top-0 z-20'
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default',
    size: 'medium'
  }
})
