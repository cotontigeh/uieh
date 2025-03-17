import { useTheme } from '@/hooks/useTheme'
import { Backdrop } from '@/ui/Backdrop'
import { Burger } from '@/ui/Burger'
import { Nav, NavContainer, NavLink } from '@/ui/Nav'
import { useState } from 'react'
import { BiAlbum } from 'react-icons/bi'
import { Link, useLocation } from 'react-router'
import { NavHeader } from './NavHeader'
import { Sidebar } from '@/ui/Sidebar'
import { routes } from '@/config/routes'

export const AppNav = () => {
  const { toggleTheme, theme } = useTheme()
  const { pathname } = useLocation()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleNav = (open = false) => setMenuIsOpen(open ? open : !menuIsOpen)

  return (
    <>
      <Nav color="primary" sticky>
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

          {routes.map((link, i) => (
            <NavLink
              asChild
              className="hidden md:flex"
              key={i}
              active={pathname === link.to}
            >
              <Link to={link.to}>{link.name}</Link>
            </NavLink>
          ))}

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
      </Nav>

      <Sidebar variant="fly" open={menuIsOpen}>
        <NavHeader mobile onCloseClick={toggleNav} />
        {routes.map((link, i) => (
          <NavLink
            key={i}
            onClick={() => toggleNav(false)}
            active={pathname === link.to}
            asChild
          >
            <Link to={link.to}>{link.name}</Link>
          </NavLink>
        ))}
      </Sidebar>

      <Backdrop
        className="md:hidden"
        open={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      />
    </>
  )
}
