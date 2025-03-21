import { Tabs } from '@/ui/Tabs/Tabs'
import { TabLink } from '@/ui/TabLink/TabLink'
import { BiHash, BiTv } from 'react-icons/bi'
import { Display } from '@/components/Display'

export const TabsView = () => {
  return (
    <>
      <h1>Tabs</h1>

      <Display>
        <h2>Colors</h2>

        <div>
          <h3>Base</h3>
          <Tabs>
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Primary</h3>
          <Tabs color="primary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Secondary</h3>
          <Tabs color="secondary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Accent</h3>
          <Tabs color="accent">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <h2>No border</h2>
        <div>
          <h3>Base</h3>
          <Tabs variant="noBorder">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Primary</h3>
          <Tabs variant="noBorder" color="primary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Secondary</h3>
          <Tabs variant="noBorder" color="secondary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Accent</h3>
          <Tabs variant="noBorder" color="accent">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <h2>Pill variant</h2>

        <div>
          <h3>Base</h3>
          <Tabs variant="noBorder">
            <TabLink variant="pill" active>
              Badge
            </TabLink>
            <TabLink variant="pill">Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Primary</h3>
          <Tabs color="primary" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Secondary</h3>
          <Tabs color="secondary" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>

        <div>
          <h3>Accent</h3>
          <Tabs color="accent" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <h2>With decorations</h2>
        <Tabs color="primary">
          <TabLink>
            <BiHash />
            Buttons
          </TabLink>
          <TabLink active>
            <BiTv />
            Badge
          </TabLink>
        </Tabs>

        <Tabs color="primary" variant="noBorder">
          <TabLink variant="pill" active>
            <BiHash />
            Buttons
          </TabLink>
          <TabLink variant="pill">
            <BiTv />
            Badge
          </TabLink>
        </Tabs>
      </Display>
    </>
  )
}
