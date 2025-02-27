import { useTheme } from '@/hooks/useTheme'
import { Burger } from '@/ui/Burger'
import { TabLink } from '@/ui/TabLink'
import { Tabs } from '@/ui/Tabs'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

export default function RouteLayout() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const { pathname } = useLocation()

  return (
    <>
      <Burger
        color={theme === 'dark' ? 'white' : 'slate'}
        size="small"
        className="absolute top-5 left-8"
        onToggle={() => setMenuIsOpen(!menuIsOpen)}
        isOpen={menuIsOpen}
      />

      <main className="mx-auto max-w-[1360px] px-8 pt-10">
        <section className="flex flex-col gap-10">
          <Tabs color="blue">
            <TabLink active={pathname === '/buttons'} asChild>
              <Link to="/buttons">Buttons</Link>
            </TabLink>
            <TabLink active={pathname === '/badges'} asChild>
              <Link to="/badges">Badges</Link>
            </TabLink>
            <TabLink active={pathname === '/tabs'} asChild>
              <Link to="/tabs">Tabs</Link>
            </TabLink>
            <TabLink
              color="green"
              active={theme === 'dark'}
              className="ml-auto"
              onClick={() => setTheme('dark')}
            >
              Dark
            </TabLink>
            <TabLink
              color="green"
              active={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              Light
            </TabLink>
          </Tabs>
          <Outlet />
        </section>
      </main>
    </>
  )
}
