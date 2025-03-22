import { cva, VariantProps } from 'cva'

export type TitleVariantsType = VariantProps<typeof titleVariants>

export const titleVariants = cva({
  base: ['font-semibold'],
  variants: {
    variant: {
      h1: ['font-black text-3xl', 'md:text-5xl'],
      h2: ['font-bold text-2xl', 'md:text-3xl'],
      h3: ['text-xl', 'md:text-2xl'],
      h4: ['text-lg', 'md:text-xl'],
      h5: ['text-base', 'md:text-lg'],
      h6: ['text-sm', 'md:text-md']
    },
    uppercase: {
      unset: null,
      true: ['uppercase']
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'h1'
  }
})
