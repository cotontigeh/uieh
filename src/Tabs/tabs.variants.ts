import { cva } from 'cva'

export const tabsVariants = cva({
  base: ['flex gap-4 border-b-1 border-slate-200', 'dark:border-slate-600'],
  variants: {
    variant: {
      noBorder: 'border-transparent dark:border-transparent'
    },
    color: {
      blue: '',
      green: '',
      red: '',
      slate: ''
    }
  }
})
