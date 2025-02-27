import { Button } from './ui/Button/Button'
import { useTheme } from './hooks/useTheme'
import { BadgesView } from './pages/BadgesView'
import { ButtonsView } from './pages/ButtonsView'
import { TabsView } from './pages/TabsView'

function App() {
  const { setTheme } = useTheme()

  return (
    <main className="mx-auto max-w-[1360px] px-8">
      <h1 className="text-[120px] uppercase">uieh</h1>
      <div className="flex gap-2 p-2">
        <Button onClick={() => setTheme('dark')}>Dark</Button>
        <Button onClick={() => setTheme('light')}>Light</Button>
      </div>
      <ButtonsView />
      <BadgesView />
      <TabsView />
    </main>
  )
}

export default App
