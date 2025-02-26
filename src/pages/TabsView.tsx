import { Tabs } from '@/ui/Tabs/Tabs'
import { TabLink } from '@/ui/TabLink/TabLink'
import { BiHash, BiTv } from 'react-icons/bi'

export const TabsView = () => {
  return (
    <section className="flex flex-col gap-10 p-2">
      <h1>Tabs</h1>

      <section className="display">
        <h2>Colors</h2>
        <Tabs color="blue">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>

        <Tabs color="green">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>

        <Tabs color="red">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>

        <Tabs color="slate">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>
      </section>

      <section className="display">
        <h2>No border</h2>
        <Tabs color="blue" variant="noBorder">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>

        <Tabs color="green" variant="noBorder">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>

        <Tabs color="red" variant="noBorder">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>

        <Tabs color="slate" variant="noBorder">
          <TabLink active>Badge</TabLink>
          <TabLink>Tab</TabLink>
        </Tabs>
      </section>

      <section className="display">
        <h2>Pill variant</h2>
        <Tabs color="blue" variant="noBorder">
          <TabLink variant="pill" active>
            Buttons
          </TabLink>
          <TabLink variant="pill">Badge</TabLink>
        </Tabs>

        <Tabs color="green" variant="noBorder">
          <TabLink variant="pill" active>
            Buttons
          </TabLink>
          <TabLink variant="pill">Badge</TabLink>
        </Tabs>

        <Tabs color="red" variant="noBorder">
          <TabLink variant="pill" active>
            Buttons
          </TabLink>
          <TabLink variant="pill">Badge</TabLink>
        </Tabs>

        <Tabs color="slate" variant="noBorder">
          <TabLink variant="pill" active>
            Buttons
          </TabLink>
          <TabLink variant="pill">Badge</TabLink>
        </Tabs>
      </section>

      <section className="display">
        <h2>With decorations</h2>
        <Tabs color="blue">
          <TabLink>
            <BiHash />
            Buttons
          </TabLink>
          <TabLink active>
            <BiTv />
            Badge
          </TabLink>
        </Tabs>

        <Tabs color="blue" variant="noBorder">
          <TabLink variant="pill" active>
            <BiHash />
            Buttons
          </TabLink>
          <TabLink variant="pill">
            <BiTv />
            Badge
          </TabLink>
        </Tabs>
      </section>
    </section>
  )
}
