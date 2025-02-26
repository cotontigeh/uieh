import { cva, VariantProps } from 'cva'

export type BadgeVariantsType = Omit<
  VariantProps<typeof badgeVariants>,
  'clickable'
>

export const badgeVariants = cva({
  base: 'inline-flex items-center ring-1 ring-inset select-none',
  variants: {
    variant: {
      default: 'rounded-md',
      dotted:
        'rounded-md before:w-2 before:h-2 before:rounded-full before:mr-1.5',
      rounded: 'rounded-xl'
    },
    color: {
      blue: [
        'bg-blue-50 text-blue-600 ring-blue-500/10 before:bg-blue-500',
        'dark:bg-blue-500 dark:text-slate-50 dark:ring-blue-900'
      ],
      green: [
        'bg-green-50 text-green-600 ring-green-500/10 before:bg-green-500',
        'dark:bg-green-300 dark:text-green-900 dark:ring-green-900'
      ],
      red: [
        'bg-red-50 text-red-600 ring-red-500/10 before:bg-red-500',
        'dark:bg-red-400 dark:text-black dark:ring-red-900'
      ],
      slate: [
        'bg-slate-50 text-slate-600 ring-slate-500/10 before:bg-slate-500',
        'dark:bg-slate-500 dark:text-slate-50 dark:ring-slate-900'
      ]
    },
    size: {
      small: ['px-2 py-1 text-xs font-medium'],
      medium: ['px-2 py-1 text-md font-medium'],
      large: ['px-2 py-1 text-lg font-medium']
    },
    clickable: {
      unset: null,
      true: ['cursor-pointer']
    },
    dissmissable: {
      unset: null,
      true: []
    }
  },
  compoundVariants: [
    // Variant default
    {
      variant: 'default',
      color: 'blue',
      clickable: true,
      className: 'hover:bg-blue-100 hover:ring-blue-500/30'
    },
    {
      variant: 'default',
      color: 'green',
      clickable: true,
      className: 'hover:bg-green-100 hover:ring-green-500/30'
    },
    {
      variant: 'default',
      color: 'red',
      clickable: true,
      className: 'hover:bg-red-100 hover:ring-red-500/30'
    },
    {
      variant: 'default',
      color: 'slate',
      clickable: true,
      className: 'hover:bg-slate-100 hover:ring-slate-500'
    },
    // Variant dotted
    {
      variant: 'dotted',
      className: [
        'bg-transparent ring-gray-300 text-gray-500',
        'dark:bg-transparent dark:ring-gray-700 dark:text-gray-300'
      ]
    },
    {
      variant: 'dotted',
      color: 'blue',
      clickable: true,
      className: 'hover:ring-blue-500/30'
    },
    {
      variant: 'dotted',
      color: 'green',
      clickable: true,
      className: 'hover:ring-green-500/30'
    },
    {
      variant: 'dotted',
      color: 'red',
      clickable: true,
      className: 'hover:ring-red-500/30'
    },
    {
      variant: 'dotted',
      color: 'slate',
      clickable: true,
      className: 'hover:ring-slate-500'
    },
    // Variant rounded
    {
      variant: 'rounded',
      className: 'px-2 py-0.5'
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'blue',
    size: 'medium'
  }
})
