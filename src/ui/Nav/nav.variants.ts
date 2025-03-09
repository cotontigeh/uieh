import { cva, VariantProps } from 'cva'

export type NavVariantsType = VariantProps<typeof navVariants>

export const navVariants = cva({
  base: 'border-b border-transparent',
  variants: {
    size: {
      small: 'h-15',
      medium: 'h-20',
      large: 'h-30'
    },
    variant: {
      default: [
        'bg-base-100 border-base-300',
        'dark:bg-base-100-dark dark:border-base-300-dark'
      ]
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default',
    size: 'medium'
  }
})
