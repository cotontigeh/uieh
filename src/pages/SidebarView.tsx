import { NavLink } from '@/ui/Nav'
import { Sidebar } from '@/ui/Sidebar'
import { Link } from 'react-router'
import { Display } from '@/components/Display'
import { cn } from '@/lib/utils'
import { NavHeader } from '@/components/NavHeader'
import { Heading } from '@/ui/Heading'

const displayClassName = cn(
  'flex-row gap-4',
  'relative overflow-hidden h-[900px] p-0'
)

export const SidebarView = () => {
  return (
    <>
      <Heading uppercase>Sidebar</Heading>

      {/* Base */}
      <Display className={displayClassName}>
        <Sidebar color="base">
          <NavHeader />
          <NavLink fullWidth active asChild>
            <Link to="#">Home</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Buttons</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Badges</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Nav</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Tabs</Link>
          </NavLink>
        </Sidebar>
        <Heading variant="h2" className="py-4">
          Base color
        </Heading>
      </Display>

      {/* Primary */}
      <Display className={displayClassName}>
        <Sidebar color="primary">
          <NavHeader />
          <NavLink fullWidth active asChild>
            <Link to="#">Home</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Buttons</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Badges</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Nav</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Tabs</Link>
          </NavLink>
        </Sidebar>
        <Heading variant="h2" className="py-4">
          Primary color
        </Heading>
      </Display>

      {/* Secondary */}
      <Display className={displayClassName}>
        <Sidebar color="secondary">
          <NavHeader />
          <NavLink fullWidth active asChild>
            <Link to="#">Home</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Buttons</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Badges</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Nav</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Tabs</Link>
          </NavLink>
        </Sidebar>
        <Heading variant="h2" className="py-4">
          Secondary color
        </Heading>
      </Display>

      {/* Accent */}
      <Display className={displayClassName}>
        <Sidebar color="accent">
          <NavHeader />
          <NavLink fullWidth active asChild>
            <Link to="#">Home</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Buttons</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Badges</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Nav</Link>
          </NavLink>
          <NavLink fullWidth asChild>
            <Link to="#">Tabs</Link>
          </NavLink>
        </Sidebar>
        <Heading variant="h2" className="py-4">
          Accent color
        </Heading>
      </Display>
    </>
  )
}
