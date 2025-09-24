import { cva, VariantProps } from 'cva'

export type NavLinkVariantsType = VariantProps<typeof navLinkVariants>

export const navLinkVariants = cva({
  base: ['select-none cursor-pointer'],
  variants: {
    variant: {
      default: ['p-2 px-4 rounded-lg font-semibold']
    },
    color: {
      base: ['hover:bg-base-200 dark:hover:bg-base-200-dark'],
      primary: ['hover:bg-base-300 hover:text-primary'],
      secondary: ['hover:bg-base-300 hover:text-secondary'],
      accent: ['hover:bg-base-300 hover:text-accent'],
      neutral: ['hover:bg-base-300 hover:text-neutral']
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
    {
      variant: 'default',
      fullWidth: true,
      className: ['flex w-full justify-start']
    },
    {
      color: 'base',
      active: true,
      className: [
        'bg-base-300 hover:bg-base-300',
        'dark:bg-base-300-dark dark:hover:bg-base-300-dark'
      ]
    },
    {
      color: 'primary',
      active: true,
      className: ['bg-base-300 hover:bg-base-300 text-primary']
    },
    {
      color: 'secondary',
      active: true,
      className: ['bg-base-300 hover:bg-base-300 text-secondary']
    },
    {
      color: 'accent',
      active: true,
      className: ['bg-base-300 hover:bg-base-300 text-accent']
    },
    {
      color: 'neutral',
      active: true,
      className: ['bg-base-300 hover:bg-base-300 text-neutral']
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    fullWidth: false
  }
})
