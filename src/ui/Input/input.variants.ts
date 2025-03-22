import { cva, VariantProps } from 'cva'

export type InputVariantsType = VariantProps<typeof inputVariants>

export const inputVariants = cva({
  base: [
    'bg-base-100 ring-base-300 ring-1 rounded-lg p-2 focus:outline-none',
    'dark:bg-base-100-dark dark:ring-base-300-dark dark:[color-scheme:dark]'
  ],
  variants: {
    variant: { default: [] },
    color: {
      base: [
        'focus:ring-base-content/30',
        'dark:focus:ring-base-content-dark/30'
      ],
      primary: ['focus:ring-primary', 'dark:focus:ring-primary'],
      secondary: ['focus:ring-secondary', 'dark:focus:ring-secondary'],
      accent: ['focus:ring-accent', 'dark:focus:ring-accent'],
      neutral: ['focus:ring-neutral', 'dark:focus:ring-neutral'],
      info: ['focus:ring-info', 'dark:focus:ring-info'],
      success: ['focus:ring-success', 'dark:focus:ring-success'],
      warning: ['focus:ring-warning', 'dark:focus:ring-warning'],
      error: ['focus:ring-error', 'dark:focus:ring-error']
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
