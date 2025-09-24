import { cva, VariantProps } from 'cva'

export type NavContainerVariantsType = VariantProps<typeof navContainerVariants>

export const navContainerVariants = cva({
  base: 'border-b border-transparent',
  variants: {
    variant: {
      default: ['flex gap-4 items-center h-full']
    },
    color: {}
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'default'
  }
})
