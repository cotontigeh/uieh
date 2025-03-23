export const routes = [
  { name: 'Home', to: '/' },
  { name: 'Badge', to: '/badge' },
  { name: 'Button', to: '/button' },
  { name: 'Heading', to: '/heading' },
  {
    name: 'Input',
    to: '/input',
    children: [
      {
        name: 'Form Example',
        to: '/input/example'
      }
    ]
  },
  { name: 'Nav', to: '/nav' },
  { name: 'Sidebar', to: '/sidebar' },
  { name: 'Tabs', to: '/tabs' },
  { name: 'Textarea', to: '/textarea' }
]
