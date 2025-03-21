import { cva } from 'cva'

export const tabsVariants = cva({
  base: [
    'flex gap-4 border-b-1 border-base-300-dark/10',
    'dark:border-base-300/10'
  ],
  variants: {
    variant: {
      noBorder: 'border-transparent dark:border-transparent'
    },
    color: {
      base: '',
      primary: '',
      secondary: '',
      accent: ''
    }
  }
})
