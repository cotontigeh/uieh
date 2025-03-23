import { cva, VariantProps } from 'cva'

export type BadgeVariantsType = Omit<
  VariantProps<typeof badgeVariants>,
  'clickable'
>

export const badgeVariants = cva({
  base: [
    'inline-flex items-center justify-center select-none ring-1 ring-inset rounded-md'
  ],
  variants: {
    variant: {
      default: [''],
      outlined: ['']
    },
    color: {
      base: [
        'bg-base-200 text-base-content ring-base-200',
        'dark:bg-base-300-dark dark:text-base-content-dark dark:ring-base-300-dark'
      ],
      primary: ['bg-primary text-primary-content ring-primary'],
      secondary: ['bg-secondary text-secondary-content ring-secondary'],
      accent: ['bg-accent text-accent-content ring-accent'],
      neutral: ['bg-neutral text-neutral-content ring-neutral'],
      info: ['bg-info text-info-content ring-info'],
      success: ['bg-success text-success-content ring-success'],
      warning: ['bg-warning text-warning-content ring-warning'],
      error: ['bg-error text-error-content ring-error']
    },
    size: {
      small: ['px-2 py-1 text-xs font-medium'],
      medium: ['px-2 py-1 text-md font-medium'],
      large: ['px-2 py-1 text-lg font-medium']
    }
  },
  compoundVariants: [
    {
      variant: 'outlined',
      className: ['bg-transparent', 'dark:bg-transparent']
    },
    {
      variant: 'outlined',
      color: 'primary',
      className: ['text-primary', 'dark:text-primary-dark']
    },
    {
      variant: 'outlined',
      color: 'secondary',
      className: ['text-secondary', 'dark:text-secondary-dark']
    },
    {
      variant: 'outlined',
      color: 'accent',
      className: ['text-accent', 'dark:text-accent-dark']
    },
    {
      variant: 'outlined',
      color: 'neutral',
      className: ['text-neutral', 'dark:text-neutral-dark']
    },
    {
      variant: 'outlined',
      color: 'info',
      className: ['text-info', 'dark:text-info-dark']
    },
    {
      variant: 'outlined',
      color: 'success',
      className: ['text-success', 'dark:text-success-dark']
    },
    {
      variant: 'outlined',
      color: 'warning',
      className: ['text-warning', 'dark:text-warning-dark']
    },
    {
      variant: 'outlined',
      color: 'error',
      className: ['text-error', 'dark:text-error-dark']
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    size: 'medium'
  }
})
