import { useTheme } from '@/hooks/useTheme'
import { Backdrop } from '@/ui/Backdrop'
import { Burger } from '@/ui/Burger'
import { Nav, NavContainer, NavLink } from '@/ui/Nav'
import { useState } from 'react'
import { BiAlbum } from 'react-icons/bi'
import { Link, useLocation } from 'react-router'
import { NavHeader } from './NavHeader'
import { Sidebar } from '@/ui/Sidebar'
import { routes } from '@/docs/config/routes'
import React from 'react'

export const AppNav = () => {
  const { toggleTheme, theme } = useTheme()
  const { pathname } = useLocation()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleNav = (open = false) => setMenuIsOpen(open ? open : !menuIsOpen)

  return (
    <>
      <Nav sticky className="lg:hidden">
        <NavContainer>
          <Burger
            size="small"
            className="lg:hidden"
            onClick={() => toggleNav()}
            isOpen={menuIsOpen}
          />
          <Link
            to="/"
            className="cursor-pointer flex gap-2 items-center font-semibold ml-2 lg:ml-0 lg:mr-4 text-xl"
          >
            <BiAlbum size={34} />
            UIEH
          </Link>

          {routes.map((link, i) => (
            <NavLink
              asChild
              key={i + link.to}
              className="hidden lg:flex"
              active={pathname === link.to}
            >
              <Link key={i} to={link.to}>
                {link.name}
              </Link>
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

      {/* Mobile */}
      <Sidebar
        className="lg:hidden"
        variant="fly"
        open={menuIsOpen}
        hideScrollWhenOpened
      >
        <NavHeader mobile onCloseClick={toggleNav} />
        {routes.map((link) => (
          <React.Fragment key={link.to}>
            <NavLink asChild fullWidth active={pathname === link.to}>
              <Link to={link.to}>{link.name}</Link>
            </NavLink>
            {link.children
              ? link.children.map((childrenLink) => (
                  <NavLink
                    asChild
                    fullWidth
                    className="ml-2 mt-1"
                    key={childrenLink.to}
                    active={pathname === childrenLink.to}
                  >
                    <Link to={childrenLink.to}>{childrenLink.name}</Link>
                  </NavLink>
                ))
              : null}
          </React.Fragment>
        ))}
      </Sidebar>

      <Backdrop
        className="lg:hidden"
        open={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      />
    </>
  )
}
