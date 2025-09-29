export type NavLinkVariant = 'default' | 'badge'
export type NavLinkColor =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
export type NavLinkFullWidth = boolean | 'unset'
export type NavLinkActive = boolean | 'unset'

export type NavLinkVariants = {
  variant?: NavLinkVariant
  color?: NavLinkColor
  fullWidth?: NavLinkFullWidth
  active?: NavLinkActive
}

export type NavLinkCompoundVariant = {
  className: string[] | string
  variant?: NavLinkVariant[] | NavLinkVariant
  fullWidth?: NavLinkFullWidth
  active?: NavLinkActive
  color?: NavLinkColor | NavLinkColor[]
}
