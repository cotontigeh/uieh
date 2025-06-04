export const routes = [
  { name: 'Home', to: '/' },
  { name: 'Badge', to: '/badge' },
  { name: 'Button', to: '/button' },
  { name: 'Card', to: '/card' },
  { name: 'Heading', to: '/heading' },
  {
    name: 'Input',
    to: '/input',
    children: [
      { name: 'Select', to: '/input/select' },
      { name: 'Textarea', to: '/input/textarea' },
      {
        name: 'Form Example',
        to: '/input/example'
      }
    ]
  },
  { name: 'Nav', to: '/nav' },
  { name: 'Sidebar', to: '/sidebar' },
  { name: 'Tabs', to: '/tabs' }
]
