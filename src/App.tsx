import { BiHash, BiTv } from 'react-icons/bi'
import { TabLink } from './Tabs/TabLink'
import { Tabs } from './Tabs/Tabs'
import { Badge } from './Badge/Badge'

function App() {
  return (
    <main className="mx-auto max-w-[1360px] px-8">
      <h1 className="text-6xl uppercase">uieh</h1>

      <Tabs className="mt-9">
        <TabLink active>Buttons</TabLink>
        <TabLink>Badge</TabLink>
      </Tabs>

      <Tabs className="mt-9" variant="noBorder">
        <TabLink active variant="pill">
          Buttons
        </TabLink>
        <TabLink variant="pill">Badge</TabLink>
      </Tabs>

      <Tabs className="mt-9" variant="noBorder">
        <TabLink>Buttons</TabLink>
        <TabLink active>Badge</TabLink>
      </Tabs>

      <Tabs className="mt-9">
        <TabLink>
          <BiHash />
          Buttons
        </TabLink>
        <TabLink active>
          <BiTv />
          Badge
        </TabLink>
      </Tabs>

      <Tabs className="mt-9">
        <TabLink>
          Buttons
          <Badge variant="rounded" color="blue">
            3
          </Badge>
        </TabLink>
        <TabLink active>
          Badge
          <Badge variant="rounded" color="blue">
            1
          </Badge>
        </TabLink>
      </Tabs>
    </main>
  )
}

export default App
