import { cva, VariantProps } from 'cva'

export type NavMobileContainerHeaderVariantsType = VariantProps<
  typeof navMobileContainerHeaderVariants
>

export const navMobileContainerHeaderVariants = cva({
  base: [''],
  variants: {
    variant: {
      default: [
        'relative flex gap-2 items-center font-semibold p-2 pb-4 mb-2 mt-2 w-full border-b',
        'md:hidden'
      ]
    }
  },
  compoundVariants: [
    {
      variant: 'default',
      className: ['border-base-300', 'dark:border-base-300-dark']
    }
  ],
  defaultVariants: {
    variant: 'default'
  }
})
