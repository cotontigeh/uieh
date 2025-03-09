import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { Backdrop } from '@/ui/Backdrop'
import { Burger } from '@/ui/Burger'
import { Nav, NavContainer, NavLink, NavLinksMobileContainer } from '@/ui/Nav'
import { useState } from 'react'
import { BiAlbum } from 'react-icons/bi'
import { Link, Outlet, useLocation } from 'react-router'

export default function AppLayout() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { toggleTheme, theme } = useTheme()
  const { pathname } = useLocation()

  return (
    <>
      <Nav sticky>
        <NavContainer className="container mx-auto px-8 md:px-0">
          <Burger
            size="small"
            className="md:hidden"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            isOpen={menuIsOpen}
          />
          <div className="cursor-pointer flex gap-2 items-center font-semibold ml-2 md:ml-0 md:mr-4">
            <BiAlbum size={34} />
            UIEH
          </div>
          <NavLinksMobileContainer open={menuIsOpen}>
            <div className="relative flex gap-2 items-center font-semibold p-2 pb-4 mb-2 mt-2 border-b border-base-300 dark:border-base-300-dark w-full md:hidden">
              <BiAlbum
                size={34}
                className={cn(
                  'cursor-pointer',
                  'text-base-content dark:text-base-content-dark'
                )}
              />
              UIEH
            </div>
            <Burger
              size="small"
              className="md:hidden absolute -right-6 top-2"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              isOpen={menuIsOpen}
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
          </NavLinksMobileContainer>
          <div
            onClick={toggleTheme}
            className="select-none flex gap-2 items-center cursor-pointer ml-auto"
          >
            <span className={theme === 'dark' ? 'font-bold' : undefined}>
              Dark
            </span>
            /
            <span className={theme === 'light' ? 'font-bold' : undefined}>
              Light
            </span>
          </div>
        </NavContainer>
        <Backdrop open={menuIsOpen} onClick={() => setMenuIsOpen(false)} />
      </Nav>
      <main className="container mx-auto px-8 pt-10 md:px-0">
        <section className="flex flex-col gap-10">
          <Outlet />
        </section>
      </main>
    </>
  )
}
