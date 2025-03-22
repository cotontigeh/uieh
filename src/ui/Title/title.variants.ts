import { cva, VariantProps } from 'cva'

export type TitleVariantsType = VariantProps<typeof titleVariants>

export const titleVariants = cva({
  base: ['font-black'],
  variants: {
    variant: {
      h1: ['text-3xl', 'md:text-5xl'],
      h2: ['text-2xl', 'md:text-4xl'],
      h3: ['text-xl', 'md:text-3xl'],
      h4: ['text-lg', 'md:text-2xl'],
      h5: ['text-base', 'md:text-xl'],
      h6: ['text-sm', 'md:text-lg']
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
