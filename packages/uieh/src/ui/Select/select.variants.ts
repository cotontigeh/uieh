import { cva, VariantProps } from 'cva'

export type SelectVariantsType = VariantProps<typeof selectVariants>

export const selectVariants = cva({
  base: [
    'appearance-none w-full',
    'block bg-base-100 ring-1 rounded-lg p-2 focus:outline-none',
    'dark:bg-base-100-dark dark:[color-scheme:dark]'
  ],
  variants: {
    variant: { default: [] },
    color: {
      base: [
        'ring-base-content/10 focus:ring-base-content/30',
        'dark:ring-base-300/10 dark:focus:ring-base-content-dark/30'
      ],
      primary: ['ring-primary/50 focus:ring-primary'],
      secondary: ['ring-secondary/50 focus:ring-secondary'],
      accent: ['ring-accent/50 focus:ring-accent'],
      neutral: ['ring-neutral/50 focus:ring-neutral'],
      info: ['ring-info/50 focus:ring-info'],
      success: ['ring-success/50 focus:ring-success'],
      warning: ['ring-warning/50 focus:ring-warning'],
      error: ['ring-error/50 focus:ring-error']
    },
    size: { small: 'p-2 text-xs', medium: 'p-3', large: 'p-4 text-lg' },
    disabled: {
      unset: null,
      true: [
        'bg-base-300 dark:bg-base-200-dark cursor-not-allowed no-select',
        'text-base-content/40 dark:text-base-content-dark/40'
      ]
    }
  },
  compoundVariants: [],
  defaultVariants: { variant: 'default', color: 'base', size: 'medium' }
})
