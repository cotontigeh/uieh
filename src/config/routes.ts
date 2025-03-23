export const routes = [
  { name: 'Home', to: '/' },
  { name: 'Badges', to: '/badges' },
  { name: 'Buttons', to: '/buttons' },
  {
    name: 'Inputs',
    to: '/inputs',
    children: [
      {
        name: 'Form Example',
        to: '/inputs/example'
      }
    ]
  },
  { name: 'Nav', to: '/nav' },
  { name: 'Sidebar', to: '/sidebar' },
  { name: 'Tabs', to: '/tabs' },
  { name: 'Textarea', to: '/textarea' },
  { name: 'Title', to: '/title' }
]
