import { cva } from 'cva'

export const burgerVariants = cva({
  base: 'relative inline-block cursor-pointer',
  variants: {
    color: {
      blue: 'text-blue-500 hover:text-blue-400',
      green: 'text-green-500 hover:text-green-400',
      red: 'text-red-500 hover:text-red-400',
      slate: 'text-slate-600 hover:text-slate-500',
      white: 'text-white hover:text-gray-200'
    },
    size: {
      small: 'w-5 h-4',
      medium: 'w-6 h-5',
      large: 'w-7 h-6'
    },
    disable: {
      unset: null,
      true: 'cursor-default text-gray-400 hover:text-gray-400'
    }
  },
  defaultVariants: {
    color: 'slate',
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
