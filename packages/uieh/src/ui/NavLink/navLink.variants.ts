import { cva } from 'cva'
import { globalsCompoundVariant } from './compoundVariants/globals.compoundVariant'
import { badgeCompoundVariant } from './compoundVariants/badgeVariant.compoundVariant'
import { defaultCompoundVariant } from './compoundVariants/defaultVariant.compoundVariant'

export const navLinkVariants = cva({
  base: ['select-none cursor-pointer'],
  variants: {
    variant: {
      badge: ['p-2 px-4 rounded-lg'],
      default: ['p-2 px-4']
    },
    color: {
      base: [],
      primary: [],
      secondary: [],
      accent: [],
      neutral: []
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
    // 🌐 Globals
    ...globalsCompoundVariant,

    // 🟦 Default Variants
    ...defaultCompoundVariant,

    // 🟦 Badge Variants
    ...badgeCompoundVariant
  ],
  defaultVariants: {
    variant: 'default',
    color: 'base',
    fullWidth: false
  }
})
