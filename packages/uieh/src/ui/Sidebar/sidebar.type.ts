export type SidebarVariant = 'default' | 'fly'

export type SidebarColor =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'transparent'

export type SidebarOpen = boolean | 'unset'

export type SidebarSticky = boolean | 'unset'

export type SidebarVariants = {
  variant?: SidebarVariant
  color?: SidebarColor
  open?: SidebarOpen
  sticky?: SidebarSticky
}

export type SidebarCompoundVariant = {
  className: string[] | string
  variant?: SidebarVariant[] | SidebarVariant
  open?: SidebarOpen
  sticky?: SidebarSticky
  color?: SidebarColor | SidebarColor[]
}
