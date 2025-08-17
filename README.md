# UIEH - React UI Library

> ⚠️ **Warning:** UIEH is in early alpha. Do **not** use in production or for critical projects at this time.

## Features

- 🎨 **Modern Design System** - Built with Tailwind CSS 4.0 and custom CSS variables
- 🌙 **Dark Mode Support** - Built-in theme switching with system preference detection
- 📱 **Responsive** - Mobile-first design approach
- 🎯 **TypeScript** - Full TypeScript support 
- 🎭 **Customizable** - Easy theming and variant system using CVA

## Installation

```bash
npm install uieh
# or
yarn add uieh
# or
pnpm add uieh
```

## Peer Dependencies

UIEH requires the following peer dependencies:

```json
{
  "react": "^19.0.0",
  "@headlessui/react": "^2.0.0"
}
```

## Quick Start

### 1. Import the CSS theme

```tsx
import 'uieh/theme/colors.theme.css'
```

### 2. Use components

```tsx
import { Button, Input, Card, Badge } from 'uieh'

function App() {
  return (
    <div className="p-4">
      <Card>
        <h1>Welcome to UIEH</h1>
        <Input placeholder="Enter your name" />
        <Button color="primary">Get Started</Button>
        <Badge color="success">New</Badge>
      </Card>
    </div>
  )
}
```

## Components

### Button

A versatile button component with multiple variants, colors, and sizes.

```tsx
import { Button } from 'uieh'

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="ghost" color="primary">Ghost Button</Button>
<Button variant="text" color="secondary">Text Button</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

**Props:**
- `variant`: `'default' | 'ghost' | 'text' | 'flat'`
- `color`: `'base' | 'white' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' | 'transparent'`
- `size`: `'small' | 'medium' | 'large'`
- `fullWidth`: `boolean`
- `disabled`: `boolean`
- `asChild`: `boolean` - Use as a child component with Radix Slot

### Input

A form input component with consistent styling.

```tsx
import { Input } from 'uieh'

<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email address" />
<Input disabled placeholder="Disabled input" />
```

### Card

A container component for grouping related content.

```tsx
import { Card } from 'uieh'

<Card>
  <h2>Card Title</h2>
  <p>Card content goes here...</p>
</Card>
```

### Badge

A small component for displaying status, labels, or counts.

```tsx
import { Badge } from 'uieh'

<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="error">Error</Badge>
<Badge color="info">Info</Badge>
```

### Tabs

A tabbed interface component.

```tsx
import { Tabs, TabLink } from 'uieh'

<Tabs>
  <TabLink href="#tab1">Tab 1</TabLink>
  <TabLink href="#tab2">Tab 2</TabLink>
  <TabLink href="#tab3">Tab 3</TabLink>
</Tabs>
```

### Select

A customizable select component.

```tsx
import { Select } from 'uieh'

<Select>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>
```

### Navigation Components

- **Nav** - Navigation bar component
- **Sidebar** - Sidebar navigation component
- **Burger** - Mobile menu toggle button
- **Backdrop** - Overlay component for modals and menus

### Layout Components

- **Container** - Responsive container component
- **Heading** - Typography component for headings

## Hooks

### useTheme

A hook for managing theme state with localStorage persistence and system preference detection.

```tsx
import { useTheme } from 'uieh/hooks'

function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useTheme()

  return (
    <Button onClick={toggleTheme}>
      Current theme: {theme}
    </Button>
  )
}
```

**Returns:**
- `theme`: `'light' | 'dark'` - Current theme
- `toggleTheme`: `() => void` - Function to toggle between themes
- `setTheme`: `(theme: 'light' | 'dark') => void` - Function to set specific theme

## Utilities

### cn

A utility function for merging Tailwind CSS classes with proper conflict resolution.

```tsx
import { cn } from 'uieh/utils'

const className = cn(
  'bg-blue-500',
  'bg-red-500', // This will override the previous class
  'text-white'
)
```

## Theming

UIEH uses CSS custom properties for theming. The default theme includes:

### Color Palette

- **Base colors**: Light and dark mode variants
- **Primary**: Main brand color
- **Secondary**: Secondary brand color
- **Accent**: Accent color for highlights
- **Neutral**: Neutral grays
- **Semantic colors**: Info, Success, Warning, Error

### Customizing Colors

You can customize the theme by copying the contents of `colors.theme.css` and adding your own custom colors. You can use any valid CSS color format including hexadecimal, RGB, HSL, or OKLCH:

```css
@theme {
  /* Base color */
  --color-base-100: #ffffff; /* Using hex instead of OKLCH */
  --color-base-200: rgb(250, 250, 250); /* Using RGB */
  --color-base-300: hsl(0, 0%, 95%); /* Using HSL */
  --color-base-content: oklch(21% 0.006 285.885); /* Using OKLCH */

  /* Custom brand colors */
  --color-primary: #3b82f6; /* Your brand blue */
  --color-secondary: #8b5cf6; /* Your brand purple */
  
  /* Add any additional custom colors */
  --color-custom-1: #ff7e33;
  --color-custom-2: rgb(45, 212, 191);
}
```

Alternatively, you can import the default theme and override specific colors:

```css
@import 'uieh/theme/colors.theme.css';

:root {
  --color-primary: #3b82f6; /* Override with your brand color */
  --color-secondary: #8b5cf6;
  /* Add any additional custom colors */
}
```

## Development

### Prerequisites

- Node.js 18+
- Yarn (recommended) or npm

### Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build library
yarn build

# Build documentation
yarn build-docs

# Lint code
yarn lint
```

### Project Structure

```
src/
├── ui/           # React components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions
├── theme/        # CSS theme files
└── docs/         # Documentation components
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Adrien E. - [GitHub](https://github.com/cotontigeh)

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Radix UI.
