import { cva } from 'cva'

export const cardFooterButtonVariants = cva({
  base: ['flex justify-center items-center w-full px-4 py-2'],
  variants: {
    variant: {},
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
    color: 'default'
  }
})
