import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { Backdrop } from '@/ui/Backdrop'
import { Burger } from '@/ui/Burger'
import {
  Nav,
  NavContainer,
  NavLink,
  NavMobileContainer,
  NavMobileContainerHeader
} from '@/ui/Nav'
import { useState } from 'react'
import { BiAlbum } from 'react-icons/bi'
import { Link, useLocation } from 'react-router'

export const AppNav = () => {
  const { toggleTheme, theme } = useTheme()
  const { pathname } = useLocation()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleNav = (open = false) => setMenuIsOpen(open ? open : !menuIsOpen)

  return (
    <Nav sticky>
      <NavContainer>
        <Burger
          size="small"
          className="md:hidden"
          onClick={() => toggleNav()}
          isOpen={menuIsOpen}
        />
        <Link
          to="/"
          className="cursor-pointer flex gap-2 items-center font-semibold ml-2 md:ml-0 md:mr-4 text-xl"
        >
          <BiAlbum size={34} />
          UIEH
        </Link>

        <NavMobileContainer open={menuIsOpen}>
          <NavMobileContainerHeader className="text-xl">
            <BiAlbum
              size={34}
              className={cn(
                'cursor-pointer',
                'text-base-content dark:text-base-content-dark'
              )}
            />
            UIEH
          </NavMobileContainerHeader>
          <Burger
            size="small"
            color="white"
            className="md:hidden absolute -right-6 top-2"
            onClick={() => setMenuIsOpen(false)}
            isOpen
          />
          <NavLink
            onClick={() => toggleNav(false)}
            active={pathname === '/'}
            asChild
          >
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink
            onClick={() => toggleNav(false)}
            active={pathname === '/buttons'}
            asChild
          >
            <Link to="/buttons">Buttons</Link>
          </NavLink>
          <NavLink
            onClick={() => toggleNav(false)}
            active={pathname === '/badges'}
            asChild
          >
            <Link to="/badges">Badges</Link>
          </NavLink>
          <NavLink
            onClick={() => toggleNav(false)}
            active={pathname === '/nav'}
            asChild
          >
            <Link to="/nav">Nav</Link>
          </NavLink>
          <NavLink
            onClick={() => toggleNav(false)}
            active={pathname === '/tabs'}
            asChild
          >
            <Link to="/tabs">Tabs</Link>
          </NavLink>
          <NavLink
            onClick={() => toggleNav(false)}
            active={pathname === '/sidebar'}
            asChild
          >
            <Link to="/sidebar">Sidebar</Link>
          </NavLink>
        </NavMobileContainer>

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
      <Backdrop
        className="md:hidden"
        open={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      />
    </Nav>
  )
}
