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
      primary: ['hover:bg-base-300 hover:text-primary']
    },
    mobile: {
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
      variant: 'default',
      mobile: true,
      className: ['flex w-full justify-start', 'md:block md:w-auto']
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    mobile: false
  }
})
