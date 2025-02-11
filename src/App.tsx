import { TabLink } from './Tabs/TabLink'
import { Tabs } from './Tabs/Tabs'

function App() {
  return (
    <main className="mx-auto max-w-[1360px] px-8">
      <h1 className="text-6xl uppercase">uieh</h1>

      <Tabs className="mt-9">
        <TabLink active>Buttons</TabLink>
        <TabLink>Badge</TabLink>
      </Tabs>
      <Tabs className="mt-9" variant="noBorder">
        <TabLink>Buttons</TabLink>
        <TabLink active>Badge</TabLink>
      </Tabs>
    </main>
  )
}

export default App
