import { cva, VariantProps } from 'cva'

export type NavLinkVariantsType = VariantProps<typeof navLinkVariants>

export const navLinkVariants = cva({
  base: ['select-none cursor-pointer'],
  variants: {
    variant: {
      default: ['p-2 px-4 rounded-lg'],
      underline: ['p-2 px-4']
    },
    color: {
      base: ['hover:bg-base-200 dark:hover:bg-base-200-dark'],
      primary: ['hover:bg-primary hover:text-primary-content'],
      secondary: ['hover:bg-secondary hover:text-secondary-content'],
      accent: ['hover:bg-accent hover:text-accent-content'],
      neutral: ['hover:bg-neutral hover:text-neutral-content']
    },
    fullWidth: {
      unset: null,
      true: ''
    },
    active: {
      unset: null,
      true: ''
    }
  },
  compoundVariants: [
    // Globals
    {
      variant: ['default', 'underline'],
      fullWidth: true,
      className: ['flex w-full justify-start']
    },

    // Default Variants
    {
      color: 'base',
      active: true,
      variant: 'default',
      className: [
        'bg-base-300 hover:bg-base-300',
        'dark:bg-base-300-dark dark:hover:bg-base-300-dark'
      ]
    },
    {
      color: 'primary',
      active: true,
      variant: 'default',
      className: ['bg-primary text-primary-content']
    },
    {
      color: 'secondary',
      active: true,
      variant: 'default',
      className: ['bg-secondary text-secondary-content']
    },
    {
      color: 'accent',
      active: true,
      variant: 'default',
      className: ['bg-accent text-accent-content']
    },
    {
      color: 'neutral',
      active: true,
      variant: 'default',
      className: ['bg-neutral text-neutral-content']
    },

    // Underline Variants
    {
      variant: 'underline',
      className: [
        'hover:bg-transparent dark:hover:bg-transparent hover:text-shadow-md'
      ]
    },
    {
      active: true,
      variant: 'underline',
      className: ['font-semibold hover:text-shadow-transparent']
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    fullWidth: false
  }
})
