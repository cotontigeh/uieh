import { cva } from 'cva'

export const cardContentVariants = cva({
  base: ['px-4 py-2', 'border-t border-base-300 dark:border-base-300-dark'],
  variants: {
    variant: {
      default: 'flex flex-col',
      line: 'flex items-center justify-between'
    },
    noBorder: {
      unset: null,
      true: 'border-t-0'
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default'
  }
})
