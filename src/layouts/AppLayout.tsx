import { useTheme } from '@/hooks/useTheme'
import { Burger } from '@/ui/Burger'
import { Button } from '@/ui/Button'
import { Nav, NavContainer, NavLink } from '@/ui/Nav'
import { TabLink } from '@/ui/TabLink'
import { Tabs } from '@/ui/Tabs'
import { useState } from 'react'
import { BiAlbum } from 'react-icons/bi'
import { Link, Outlet, useLocation } from 'react-router'

export default function AppLayout() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const { pathname } = useLocation()

  return (
    <>
      {/* <Burger
        color={theme === 'dark' ? 'white' : 'slate'}
        size="small"
        className="absolute top-5 left-8"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        isOpen={menuIsOpen}
      /> */}
      <Nav>
        <NavContainer className="container mx-auto">
          <BiAlbum
            size={34}
            className="text-slate-800 dark:text-slate-300 mr-8 cursor-pointer"
          />
          <NavLink active={pathname === '/'} asChild>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink active={pathname === '/buttons'} asChild>
            <Link to="/buttons">Buttons</Link>
          </NavLink>
          <NavLink active={pathname === '/badges'} asChild>
            <Link to="/badges">Badges</Link>
          </NavLink>
          <NavLink active={pathname === '/nav'} asChild>
            <Link to="/nav">Nav</Link>
          </NavLink>
          <NavLink active={pathname === '/tabs'} asChild>
            <Link to="/tabs">Tabs</Link>
          </NavLink>
        </NavContainer>
      </Nav>
      <main className="container mx-auto px-8 pt-10 md:px-0">
        <section className="flex flex-col gap-10">
          <Tabs color="blue">
            <TabLink active={pathname === '/buttons'} asChild>
              <Link to="/buttons">Buttons</Link>
            </TabLink>
            <TabLink active={pathname === '/badges'} asChild>
              <Link to="/badges">Badges</Link>
            </TabLink>
            <TabLink active={pathname === '/nav'} asChild>
              <Link to="/nav">Nav</Link>
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
