import { cva } from 'cva'

export const burgerVariants = cva({
  base: 'relative inline-block cursor-pointer',
  variants: {
    color: {
      default: [
        'text-base-content hover:text-base-content',
        'dark:text-base-content-dark dark:hover:text-base-content-dark'
      ],
      white: [
        'text-white hover:text-white',
        'dark:text-white dark:hover:text-white'
      ]
    },
    size: {
      small: 'w-4 h-3',
      medium: 'w-6 h-5',
      large: 'w-7 h-6'
    },
    disable: {
      unset: null,
      true: [
        'cursor-default hover:text-base-content/60',
        'dark:hover:text-base-content-dark/60'
      ]
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'medium'
  }
})

export const burgerLineVariants = cva({
  base: 'absolute block w-full bg-current transition-all duration-300',
  variants: {
    size: {
      small: 'h-0.5',
      medium: 'h-0.75',
      large: 'h-1'
    },
    isOpen: {
      false: '',
      true: ''
    }
  },
  defaultVariants: {
    size: 'medium',
    isOpen: false
  },
  compoundVariants: [
    // Top line transformations
    {
      isOpen: true,
      className: 'top-1/2 -translate-y-1/2'
    },
    {
      isOpen: false,
      className: ''
    }
  ]
})
