import { NavLinkCompoundVariant } from '../navLink.type'

export const globalsCompoundVariant: NavLinkCompoundVariant[] = [
  {
    variant: ['default', 'badge'],
    fullWidth: true,
    className: ['flex w-full justify-start']
  },
  {
    active: true,
    className: ['font-semibold']
  }
]
