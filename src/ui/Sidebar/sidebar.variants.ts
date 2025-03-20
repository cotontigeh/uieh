import { cva, VariantProps } from 'cva'

export type SidebarVariantsType = VariantProps<typeof sidebarVariants>

export const sidebarVariants = cva({
  base: [
    'flex flex-col gap-2 items-start p-4 h-full w-3/6 overflow-auto',
    'lg:w-2/6',
    'transition-left duration-200'
  ],
  variants: {
    variant: {
      default: [''],
      fly: ['fixed top-0 z-90 w-5/6', 'lg:w-2/6']
    },
    color: {
      base: [
        'bg-base-100 border-r border-base-300',
        'dark:bg-base-100-dark dark:border-base-300-dark'
      ],
      primary: [
        'border-r border-base-300/20 bg-primary text-base-content-dark'
      ],
      secondary: [
        'border-r border-base-300/20 bg-secondary text-base-content-dark'
      ],
      accent: ['border-r border-base-300/20 bg-accent text-base-content-dark'],
      neutral: ['border-r border-base-300/20 bg-neutral text-base-content-dark']
    },
    open: {
      unset: null,
      true: ''
    }
  },
  compoundVariants: [
    {
      open: true,
      variant: 'fly',
      className: 'left-0'
    },
    {
      open: false,
      variant: 'fly',
      className: '-left-full'
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    open: true
  }
})
