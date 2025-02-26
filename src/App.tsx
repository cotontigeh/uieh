/* eslint-disable @typescript-eslint/no-unused-vars */
import { useColorScheme } from './hooks/useColorScheme'
import { BadgesV2View } from './partials/BadgesV2View'
import { TabsView } from './partials/TabsView'

function App() {
  useColorScheme()

  return (
    <main className="mx-auto max-w-[1360px] px-8">
      <h1 className="text-6xl uppercase">uieh</h1>
      <BadgesV2View />
    </main>
  )
}

export default App
