import { cva } from 'cva'

export const tabLinkVariants = cva({
  base: [
    'flex gap-2 items-center text-slate-500 font-medium cursor-pointer py-4 px-1.5 border-b-2 border-transparent',
    'hover:text-slate-600 hover:border-slate-300',
    'dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-300'
  ],
  variants: {
    variant: {
      pill: [
        'py-2 px-3 rounded-md',
        'hover:border-transparent hover:bg-slate-100',
        'dark:hover:border-transparent dark:hover:bg-slate-500/20'
      ]
    },
    color: {
      blue: '',
      green: '',
      red: '',
      slate: ''
    },
    active: {
      unset: null,
      true: ''
    }
  },
  compoundVariants: [
    /**************************************************************************
     * COLORS
     **************************************************************************/
    {
      color: 'blue',
      active: true,
      className: [
        'text-blue-500 border-blue-500 hover:border-blue-500 hover:text-blue-500',
        'dark:border-blue-400 dark:hover:border-blue-400'
      ]
    },
    {
      color: 'green',
      active: true,
      className: [
        'text-green-500 border-green-500 hover:border-green-500 hover:text-green-500',
        'dark:border-green-400 dark:hover:border-green-400'
      ]
    },
    {
      color: 'red',
      active: true,
      className: [
        'text-red-500 border-red-500 hover:border-red-500 hover:text-red-500',
        'dark:border-red-400 dark:hover:border-red-400'
      ]
    },
    {
      color: 'slate',
      active: true,
      className: [
        'text-slate-500 border-slate-500 hover:border-slate-500 hover:text-slate-600',
        'dark:border-slate-400 dark:hover:border-slate-400'
      ]
    },

    /**************************************************************************
     * PILL VARIANTS
     **************************************************************************/
    {
      variant: 'pill',
      active: true,
      color: 'blue',
      className: [
        'bg-blue-100 text-blue-500 border-transparent hover:text-blue-500 hover:border-transparent',
        'dark:bg-blue-500/20 dark:text-blue-100 dark:border-transparent',
        'dark:hover:border-transparent'
      ]
    },
    {
      variant: 'pill',
      active: true,
      color: 'green',
      className: [
        'bg-green-100 text-green-500 border-transparent hover:text-green-500 hover:border-transparent',
        'dark:bg-green-500/20 dark:text-green-100 dark:border-transparent',
        'dark:hover:border-transparent'
      ]
    },
    {
      variant: 'pill',
      active: true,
      color: 'red',
      className: [
        'bg-red-100 text-red-500 border-transparent hover:text-red-500 hover:border-transparent',
        'dark:bg-red-500/20 dark:text-red-100 dark:border-transparent',
        'dark:hover:border-transparent'
      ]
    },
    {
      variant: 'pill',
      active: true,
      color: 'slate',
      className: [
        'bg-slate-100 text-slate-500 border-transparent hover:text-slate-500 hover:border-transparent',
        'dark:bg-slate-500/20 dark:text-slate-100 dark:border-transparent',
        'dark:hover:border-transparent'
      ]
    }
  ],
  defaultVariants: {
    color: 'slate'
  }
})
