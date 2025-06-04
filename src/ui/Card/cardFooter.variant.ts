import { cva } from 'cva'

export const cardFooterVariants = cva({
  base: ['border-t border-base-300 dark:border-base-300-dark'],
  variants: {
    variant: {
      default: 'flex px-4 py-2',
      button: 'flex w-full justify-center px-4 py-2',
      buttons: 'flex w-full justify-center'
    },
    color: {
      default: '',
      primary:
        'bg-primary text-primary-content ring-primary hover:bg-primary/90',
      secondary:
        'bg-secondary text-secondary-content ring-secondary hover:bg-secondary/90',
      accent: 'bg-accent text-accent-content ring-accent hover:bg-accent/90',
      neutral:
        'bg-neutral text-neutral-content ring-neutral hover:bg-neutral/90',
      info: 'bg-info text-info-content ring-info hover:bg-info/90',
      success:
        'bg-success text-success-content ring-success hover:bg-success/90',
      warning:
        'bg-warning text-warning-content ring-warning hover:bg-warning/90',
      error: 'bg-error text-error-content ring-error hover:bg-error/90'
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default',
    color: 'default'
  }
})
