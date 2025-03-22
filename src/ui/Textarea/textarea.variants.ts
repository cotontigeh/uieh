import { cva, VariantProps } from 'cva'

export type TextareaVariantsType = VariantProps<typeof textareaVariants>

export const textareaVariants = cva({
  base: [
    'focus:outline-none ring-1 rounded-lg p-4',
    'dark:[color-scheme:dark]'
  ],
  variants: {
    variant: { default: [] },
    color: {
      base: [
        'ring-base-300-dark/10 focus:ring-base-300-dark/20',
        'dark:ring-base-300/10 dark:focus:ring-base-300/20'
      ],
      primary: [
        'ring-primary/70 focus:ring-primary',
        'dark:ring-primary/70 dark:focus:ring-primary'
      ],
      secondary: [
        'ring-secondary/70 focus:ring-secondary',
        'dark:ring-secondary/70 dark:focus:ring-secondary'
      ],
      accent: [
        'ring-accent/70 focus:ring-accent',
        'dark:ring-accent/70 dark:focus:ring-accent'
      ],
      neutral: [
        'ring-neutral/70 focus:ring-neutral',
        'dark:ring-neutral/70 dark:focus:ring-neutral'
      ],
      info: [
        'ring-info/70 focus:ring-info',
        'dark:ring-info/70 dark:focus:ring-info'
      ],
      success: [
        'ring-success/70 focus:ring-success',
        'dark:ring-success/70 dark:focus:ring-success'
      ],
      warning: [
        'ring-warning/70 focus:ring-warning',
        'dark:ring-warning/70 dark:focus:ring-warning'
      ],
      error: [
        'ring-error/70 focus:ring-error',
        'dark:ring-error/70 dark:focus:ring-error'
      ]
    },
    disabled: {
      unset: null,
      true: [
        'bg-base-300 dark:bg-base-200-dark cursor-not-allowed no-select',
        'text-base-content/40 dark:text-base-content-dark/40'
      ]
    }
  },
  compoundVariants: [],
  defaultVariants: { variant: 'default', color: 'base' }
})
