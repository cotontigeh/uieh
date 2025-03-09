import { Button } from '@/ui/Button'
import { Nav, NavContainer, NavLink } from '@/ui/Nav'
import { BiAlbum } from 'react-icons/bi'

export const NavView = () => {
  return (
    <>
      <h1>Nav</h1>
      <section className="display">
        <Nav size="small">
          <NavContainer className="container mx-auto px-4">
            <BiAlbum
              size={34}
              className="text-slate-800 dark:text-slate-300 mr-8 cursor-pointer"
            />
            <NavLink active>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink className="ml-auto">Sign in</NavLink>
            <Button color="green">Get your ticket</Button>
          </NavContainer>
        </Nav>
        <Nav>
          <NavContainer className="container mx-auto px-4">
            <BiAlbum
              size={34}
              className="text-slate-800 dark:text-slate-300 mr-8 cursor-pointer"
            />
            <NavLink active>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink className="ml-auto">Sign in</NavLink>
            <Button color="green">Get your ticket</Button>
          </NavContainer>
        </Nav>
        <Nav size="large">
          <NavContainer className="container mx-auto px-4">
            <BiAlbum
              size={34}
              className="text-slate-800 dark:text-slate-300 mr-8 cursor-pointer"
            />
            <NavLink active>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink className="ml-auto">Sign in</NavLink>
            <Button color="green">Get your ticket</Button>
          </NavContainer>
        </Nav>
      </section>
    </>
  )
}
