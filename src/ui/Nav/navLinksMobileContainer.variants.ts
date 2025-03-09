import { cva, VariantProps } from 'cva'

export type NavLinksMobileContainerVariantsType = VariantProps<
  typeof navLinksMobileContainerVariants
>

export const navLinksMobileContainerVariants = cva({
  base: [
    // Position
    'absolute top-0 h-screen w-4/5 z-10',
    'md:relative md:left-0 md:h-full md:top-inherit md:w-full md:z-0',
    // Display
    'flex flex-col gap-2 items-start border-r px-4',
    'md:flex-row md:gap-4 md:items-center md:border-0 md:px-0',
    // Colors
    'bg-base-100 dark:bg-base-100-dark border-base-300 dark:border-base-300-dark',
    'md:bg-transparent',
    // Transition
    'transition-left duration-200'
  ],
  variants: {
    open: {
      unset: null,
      true: ''
    }
  },
  compoundVariants: [
    {
      open: true,
      className: 'left-0'
    },
    {
      open: false,
      className: '-left-full'
    }
  ],
  defaultVariants: {
    open: false
  }
})
