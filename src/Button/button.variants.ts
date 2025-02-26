import { cva } from 'cva'

export const buttonVariants = cva({
  base: 'inline-flex items-center gap-2 rounded-md cursor-pointer select-none',
  variants: {
    variant: {
      default: '',
      ghost: 'ring-1'
    },
    color: {
      blue: [
        'bg-blue-500 text-white hover:bg-blue-400',
        'dark:bg-blue-600 dark:hover:bg-blue-500'
      ],
      green: [
        'bg-green-500 text-white hover:bg-green-400',
        'dark:bg-green-600 dark:hover:bg-green-500'
      ],
      red: [
        'bg-red-500 text-white hover:bg-red-400',
        'dark:bg-red-600 dark:hover:bg-red-500'
      ],
      slate: [
        'bg-slate-500 text-white hover:bg-slate-400',
        'dark:bg-slate-600 dark:hover:bg-slate-500'
      ]
    },
    size: {
      small: 'text-sm px-2 py-1',
      medium: 'text-md px-4 py-2',
      large: 'text-lg px-6 py-3'
    },
    disable: {
      unset: null,
      true: [
        'cursor-default bg-gray-200 text-gray-400 hover:bg-gray-200',
        'dark:bg-slate-700 dark:hover:bg-slate-700'
      ]
    }
  },
  compoundVariants: [
    {
      variant: 'ghost',
      className: [
        'bg-transparent hover:bg-transparent',
        'dark:bg-transparent dark:hover:bg-transparent'
      ]
    },
    {
      variant: 'ghost',
      color: 'blue',
      className: [
        'text-blue-500 hover:text-blue-600',
        'dark:text-blue-400 dark:hover:text-blue-300'
      ]
    },
    {
      variant: 'ghost',
      color: 'green',
      className: [
        'text-green-500 hover:text-green-600',
        'dark:text-green-400 dark:hover:text-green-300'
      ]
    },
    {
      variant: 'ghost',
      color: 'red',
      className: [
        'text-red-500 hover:text-red-600',
        'dark:text-red-400 dark:hover:text-red-300'
      ]
    },
    {
      variant: 'ghost',
      color: 'slate',
      className: [
        'text-slate-600 hover:text-slate-600',
        'dark:text-slate-400 dark:hover:text-slate-300'
      ]
    }
  ],
  defaultVariants: {
    color: 'blue',
    size: 'medium'
  }
})
