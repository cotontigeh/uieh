import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) return savedTheme

    // Check system preference as fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    // Apply theme when component mounts or theme changes
    localStorage.setItem('theme', theme)
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme, setTheme }
}
