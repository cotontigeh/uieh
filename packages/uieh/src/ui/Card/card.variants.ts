import { cva } from 'cva'

export const cardVariants = cva({
  base: [
    'rounded-lg overflow-hidden',
    'border border-base-300',
    'dark:border-base-300-dark'
  ],
  variants: {
    variant: {
      flat: ['bg-base-100', 'dark:bg-base-100-dark'],
      linear: [
        'bg-linear-to-t from-base-100 to-base-200/50',
        'dark:from-base-100-dark dark:to-base-200-dark'
      ]
    },
    shadow: {
      unset: null,
      true: ['shadow-md']
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'linear'
  }
})
