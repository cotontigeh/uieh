import { cva, VariantProps } from 'cva'

export type NavVariantsType = VariantProps<typeof navVariants>

export const navVariants = cva({
  base: 'border-b border-transparent',
  variants: {
    variant: {
      default: []
    },
    color: {
      base: [
        'bg-base-100 border-base-300',
        'dark:bg-base-100-dark dark:border-base-300-dark'
      ],
      primary: ['bg-primary border-primary-content/20 text-primary-content'],
      secondary: [
        'bg-secondary border-secondary-content/20 text-secondary-content'
      ],
      accent: ['bg-accent border-accent-content/20 text-accent-content'],
      neutral: ['bg-neutral border-neutral-content/20 text-neutral-content']
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
    color: 'base',
    size: 'medium'
  }
})
