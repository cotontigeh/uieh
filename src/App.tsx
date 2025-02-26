/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from './Button/Button'
import { useTheme } from './hooks/useTheme'
import { BadgesView } from './partials/BadgesView'
import { TabsView } from './partials/TabsView'

function App() {
  const { setTheme } = useTheme()

  return (
    <main className="mx-auto max-w-[1360px] px-8">
      <h1 className="text-6xl uppercase">uieh</h1>
      <div className="flex gap-2 p-2">
        <Button onClick={() => setTheme('dark')}>Dark</Button>
        <Button onClick={() => setTheme('light')}>Light</Button>
      </div>
      <BadgesView />
    </main>
  )
}

export default App
