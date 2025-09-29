import { NavLinkCompoundVariant } from '../navLink.type'

export const defaultCompoundVariant: NavLinkCompoundVariant[] = [
  // 🟫 Base color
  {
    color: 'base',
    variant: 'default',
    className: [
      'text-base-300-dark/50 dark:text-base-300/50',
      'hover:text-base-300-dark dark:hover:text-base-300'
    ]
  },
  {
    active: true,
    color: 'base',
    variant: 'default',
    className: ['text-base-300-dark dark:text-base-100']
  },

  // 🟫 Primary color
  {
    color: 'primary',
    variant: 'default',
    className: ['text-primary/80', 'hover:text-primary']
  },
  {
    active: true,
    color: 'primary',
    variant: 'default',
    className: ['text-primary']
  },

  // 🟫 Secondary color
  {
    color: 'secondary',
    variant: 'default',
    className: ['text-secondary/80', 'hover:text-secondary']
  },
  {
    active: true,
    color: 'secondary',
    variant: 'default',
    className: ['text-secondary']
  },

  // 🟫 Accent color
  {
    color: 'accent',
    variant: 'default',
    className: ['text-accent/80', 'hover:text-accent']
  },
  {
    active: true,
    color: 'accent',
    variant: 'default',
    className: ['text-accent']
  },

  // 🟫 Neutral color
  {
    color: 'neutral',
    variant: 'default',
    className: ['text-neutral/80', 'hover:text-neutral']
  },
  {
    active: true,
    color: 'neutral',
    variant: 'default',
    className: ['text-neutral']
  }
]
