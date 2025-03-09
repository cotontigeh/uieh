import { cva, VariantProps } from 'cva'

export type NavLinkVariantsType = VariantProps<typeof navLinkVariants>

export const navLinkVariants = cva({
  base: ['select-none cursor-pointer'],
  variants: {
    variant: {
      default: [
        'p-2 px-4 rounded-lg font-semibold hover:bg-base-200',
        'dark:hover:bg-base-200-dark'
      ]
    },
    active: {
      unset: null,
      true: ''
    }
  },
  compoundVariants: [
    {
      variant: 'default',
      active: true,
      className: [
        'bg-base-300 hover:bg-base-300',
        'dark:bg-base-300-dark dark:hover:bg-base-300-dark'
      ]
    }
  ],
  defaultVariants: {
    variant: 'default'
  }
})
