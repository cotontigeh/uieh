import { Tabs } from '@/Tabs/Tabs'
import { TabLink } from '@/Tabs/TabLink'
import { BiHash, BiTv } from 'react-icons/bi'
import { Badge } from '@/Badge/Badge'

export const TabsView = () => {
  return (
    <>
      <Tabs className="mt-9">
        <TabLink color="green" active>
          Badge
        </TabLink>
        <TabLink color="blue">Tab</TabLink>
      </Tabs>

      <Tabs className="mt-9" variant="noBorder">
        <TabLink active variant="pill" color="green">
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
        <TabLink active color="red">
          <BiTv />
          Badge
        </TabLink>
      </Tabs>

      <Tabs className="mt-9">
        <TabLink color="green" active>
          Buttons
          <Badge variant="rounded" color="green">
            3
          </Badge>
        </TabLink>
        <TabLink>
          Badge
          <Badge variant="rounded">1</Badge>
        </TabLink>
      </Tabs>
    </>
  )
}
