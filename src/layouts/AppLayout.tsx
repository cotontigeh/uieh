import { AppNav } from '@/components/AppNav'
import { NavHeader } from '@/components/NavHeader'
import { routes } from '@/config/routes'
import { Container } from '@/ui/Container'
import { NavLink } from '@/ui/Nav'
import { Sidebar } from '@/ui/Sidebar'
import { Link, Outlet, useLocation } from 'react-router'

export default function AppLayout() {
  const { pathname } = useLocation()

  return (
    <main className="flex flex-col lg:flex-row">
      <AppNav />
      <Sidebar
        color="base"
        className="relative pt-0 hidden lg:block lg:w-[400px] h-screen"
      >
        <NavHeader
          showThemeToggle
          className="sticky top-0 bg-base-100 dark:bg-base-100-dark"
        />

        {routes.map((link, i) => (
          <NavLink
            asChild
            fullWidth
            className="hidden lg:flex"
            key={i}
            active={pathname === link.to}
          >
            <Link to={link.to}>{link.name}</Link>
          </NavLink>
        ))}
      </Sidebar>

      <div className="flex-1 lg:h-screen lg:overflow-auto">
        <Container className="flex flex-col gap-10 pt-5 pb-5 lg:px-5">
          <Outlet />
        </Container>
      </div>
    </main>
  )
}
