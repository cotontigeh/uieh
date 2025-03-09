import { AppNav } from '@/components/AppNav'
import { Container } from '@/ui/Container'
import { Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <>
      <AppNav />
      <Container asChild>
        <main className="flex flex-col gap-10 pt-5">
          <Outlet />
        </main>
      </Container>
    </>
  )
}
