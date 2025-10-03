import { cva } from 'cva'
import { flyCompoundVariant } from './compoundVariants/flyVariant.compound'

export const sidebarVariants = cva({
  base: [
    'flex flex-col gap-2 items-start p-4 h-full w-3/6 overflow-auto',
    'lg:w-2/6',
    'transition-left duration-200'
  ],
  variants: {
    variant: {
      default: [''],
      fly: ['fixed top-0 z-90 w-5/6', 'lg:w-2/6']
    },
    color: {
      base: [
        'bg-base-100 border-r border-base-300',
        'dark:bg-base-100-dark dark:border-base-300-dark'
      ],
      transparent: ['border-r border-base-300', 'dark:border-base-300-dark'],
      primary: [
        'border-r border-base-300/20 bg-primary text-base-content-dark'
      ],
      secondary: [
        'border-r border-base-300/20 bg-secondary text-base-content-dark'
      ],
      accent: ['border-r border-base-300/20 bg-accent text-base-content-dark'],
      neutral: ['border-r border-base-300/20 bg-neutral text-base-content-dark']
    },
    open: {
      unset: null,
      true: ''
    },
    sticky: {
      unset: null,
      true: 'sticky top-0 z-20'
    }
  },
  compoundVariants: [
    // 🟦 Fly Variants
    ...flyCompoundVariant
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    open: false,
    sticky: false
  }
})
