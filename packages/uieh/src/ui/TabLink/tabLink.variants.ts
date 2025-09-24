import { cva } from 'cva'

export const tabLinkVariants = cva({
  base: [
    'flex gap-2 items-center font-medium cursor-pointer py-4 px-1.5 border-transparent select-none',
    'text-base-content hover:border-base-300-dark',
    'dark:text-base-content-dark'
  ],
  variants: {
    variant: {
      default: [
        'border-b-2 hover:border-base-content-dark dark:hover:border-base-300'
      ],
      pill: [
        'border-b-0 py-2 px-3 rounded-lg border-transparent',
        'hover:border-transparent hover:bg-base-300/40',
        'dark:hover:border-transparent dark:hover:bg-base-300-dark/40'
      ]
    },
    color: {
      base: [''],
      primary: [''],
      secondary: [''],
      accent: ['']
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
      color: 'base',
      active: true,
      className: [
        'border-base-300-dark hover:border-base-content-dark hover:bg-base-300-dark',
        'dark:border-base-300 dark:hover:border-base-300 dark:hover:bg-base-300-dark'
      ]
    },
    {
      color: 'primary',
      active: true,
      className: [
        'border-primary hover:border-primary dark:hover:border-primary'
      ]
    },
    {
      color: 'secondary',
      active: true,
      className: [
        'border-secondary hover:border-secondary dark:hover:border-secondary'
      ]
    },
    {
      color: 'accent',
      active: true,
      className: ['border-accent hover:border-accent dark:hover:border-accent']
    },

    /**************************************************************************
     * PILL VARIANTS
     **************************************************************************/
    {
      variant: 'pill',
      active: true,
      color: 'base',
      className: [
        'bg-base-content text-base-300 hover:bg-base-content',
        'dark:bg-base-content-dark dark:text-base-300-dark dark:hover:bg-base-content-dark'
      ]
    },
    {
      variant: 'pill',
      active: true,
      color: 'primary',
      className: [
        'bg-primary hover:bg-primary text-primary-content hover:bg-primary-content',
        'dark:hover:bg-primary'
      ]
    },
    {
      variant: 'pill',
      active: true,
      color: 'secondary',
      className: [
        'bg-secondary hover:bg-secondary text-secondary-content hover:bg-secondary-content',
        'dark:hover:bg-secondary'
      ]
    },
    {
      variant: 'pill',
      active: true,
      color: 'accent',
      className: [
        'bg-accent hover:bg-accent text-accent-content hover:bg-accent-content',
        'dark:hover:bg-accent'
      ]
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base'
  }
})
