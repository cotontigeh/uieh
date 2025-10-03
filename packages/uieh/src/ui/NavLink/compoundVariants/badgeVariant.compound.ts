import { NavLinkCompoundVariant } from '../navLink.type'

export const badgeCompoundVariant: NavLinkCompoundVariant[] = [
  {
    variant: 'badge',
    className: ['text-base-300-dark/50 dark:text-base-300/50']
  },
  {
    variant: 'badge',
    active: true,
    className: ['text-base-300-dark dark:text-base-300']
  },

  // 🟫 Base color
  {
    variant: 'badge',
    color: 'base',
    className: ['hover:bg-base-200 dark:hover:bg-base-200-dark']
  },
  {
    active: true,
    color: 'base',
    variant: 'badge',
    className: [
      'bg-base-300 hover:bg-base-300',
      'dark:bg-base-300-dark dark:hover:bg-base-300-dark'
    ]
  },

  // 🟫 Primary color
  {
    color: 'primary',
    variant: 'badge',
    className: ['hover:bg-primary hover:text-primary-content']
  },
  {
    active: true,
    color: 'primary',
    variant: 'badge',
    className: ['bg-primary text-primary-content']
  },

  // 🟫 Secondary color
  {
    color: 'secondary',
    variant: 'badge',
    className: ['hover:bg-secondary hover:text-secondary-content']
  },
  {
    color: 'secondary',
    active: true,
    variant: 'badge',
    className: ['bg-secondary text-secondary-content']
  },

  // 🟫 Accent color
  {
    color: 'accent',
    variant: 'badge',
    className: ['hover:bg-accent hover:text-accent-content']
  },
  {
    color: 'accent',
    active: true,
    variant: 'badge',
    className: ['bg-accent text-accent-content']
  },

  // 🟫 Neutral color
  {
    color: 'neutral',
    variant: 'badge',
    className: ['hover:bg-neutral hover:text-neutral-content']
  },
  {
    color: 'neutral',
    active: true,
    variant: 'badge',
    className: ['bg-neutral text-neutral-content']
  }
]
