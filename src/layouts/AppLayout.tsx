import { useTheme } from '@/hooks/useTheme'
import { TabLink } from '@/ui/TabLink'
import { Tabs } from '@/ui/Tabs'
import { Link, Outlet, useLocation } from 'react-router'

export default function RouteLayout() {
  const { setTheme, theme } = useTheme()
  const { pathname } = useLocation()

  return (
    <main className="mx-auto max-w-[1360px] px-8">
      <section className="flex flex-col gap-10 p-2">
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
  )
}
