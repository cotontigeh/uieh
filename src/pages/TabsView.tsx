import { Tabs } from '@/ui/Tabs/Tabs'
import { TabLink } from '@/ui/TabLink/TabLink'
import { BiHash, BiTv } from 'react-icons/bi'
import { Display } from '@/components/Display'
import { Heading } from '@/ui/Heading'

export const TabsView = () => {
  return (
    <>
      <Heading uppercase>Tabs</Heading>

      <Display>
        <Heading variant="h2">Colors</Heading>

        <div>
          <Heading variant="h3">Base</Heading>
          <Tabs>
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Primary</Heading>
          <Tabs color="primary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Secondary</Heading>
          <Tabs color="secondary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Accent</Heading>
          <Tabs color="accent">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <Heading variant="h2">No border</Heading>
        <div>
          <Heading variant="h3">Base</Heading>
          <Tabs variant="noBorder">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Primary</Heading>
          <Tabs variant="noBorder" color="primary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Secondary</Heading>
          <Tabs variant="noBorder" color="secondary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Accent</Heading>
          <Tabs variant="noBorder" color="accent">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <Heading variant="h2">Pill variant</Heading>

        <div>
          <Heading variant="h3">Base</Heading>
          <Tabs variant="noBorder">
            <TabLink variant="pill" active>
              Badge
            </TabLink>
            <TabLink variant="pill">Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Primary</Heading>
          <Tabs color="primary" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Secondary</Heading>
          <Tabs color="secondary" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>

        <div>
          <Heading variant="h3">Accent</Heading>
          <Tabs color="accent" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <Heading variant="h2">With decorations</Heading>
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
