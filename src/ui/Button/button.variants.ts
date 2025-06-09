import { cva } from 'cva'

export const buttonVariants = cva({
  base: [
    'flex items-center justify-center gap-2 select-none cursor-pointe rounded-lg font-semibold cursor-pointer'
  ],
  variants: {
    variant: {
      default: [''],
      ghost: ['ring-[1.1px]'],
      text: 'bg-transparent border-transparent',
      flat: 'rounded-none'
    },
    color: {
      base: [
        'bg-base-content ring-base-content text-base-300',
        'hover:bg-base-100-dark',
        'dark:bg-base-content-dark dark:ring-base-content-dark dark:text-base-300-dark',
        'dark:hover:bg-base-200'
      ],
      white: ['bg-white text-base-content ring-white hover:bg-white/95'],
      primary: [
        'bg-primary text-primary-content ring-primary hover:bg-primary/90'
      ],
      secondary: [
        'bg-secondary text-secondary-content ring-secondary hover:bg-secondary/90'
      ],
      accent: ['bg-accent text-accent-content ring-accent hover:bg-accent/90'],
      neutral: [
        'bg-neutral text-neutral-content ring-neutral hover:bg-neutral/90'
      ],
      info: ['bg-info text-info-content ring-info hover:bg-info/90'],
      success: [
        'bg-success text-success-content ring-success hover:bg-success/90'
      ],
      warning: [
        'bg-warning text-warning-content ring-warning hover:bg-warning/90'
      ],
      error: ['bg-error text-error-content ring-error hover:bg-error/90'],
      transparent: 'bg-transparent'
    },
    size: {
      small: 'text-sm px-3 py-2',
      medium: 'text-md px-4 py-2',
      large: 'text-lg px-5 py-3'
    },
    disabled: {
      unset: null,
      true: ['cursor-default opacity-50 pointer-events-none']
    },
    fullWidth: {
      unset: null,
      true: 'w-full justify-center'
    }
  },
  compoundVariants: [
    {
      variant: 'ghost',
      className: [
        'bg-transparent text-base-content',
        'dark:bg-transparent dark:text-base-content-dark'
      ]
    },
    {
      variant: 'ghost',
      color: 'base',
      className: [
        'hover:text-base-content-dark',
        'dark:hover:text-base-content'
      ]
    },
    // Text Variant
    {
      variant: 'text',
      color: [
        'base',
        'primary',
        'secondary',
        'accent',
        'neutral',
        'info',
        'success',
        'warning',
        'error'
      ],
      className: [
        'bg-transparent dark:bg-transparent',
        'text-base-content dark:text-base-content-dark'
      ]
    },
    {
      variant: 'text',
      color: ['base'],
      className: ['hover:text-base-content-dark dark:hover:text-base-content']
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    size: 'medium'
  }
})
