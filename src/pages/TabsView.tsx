import { Tabs } from '@/ui/Tabs/Tabs'
import { TabLink } from '@/ui/TabLink/TabLink'
import { BiHash, BiTv } from 'react-icons/bi'
import { Display } from '@/components/Display'
import { Title } from '@/ui/Title'

export const TabsView = () => {
  return (
    <>
      <Title uppercase>Tabs</Title>

      <Display>
        <Title variant="h2">Colors</Title>

        <div>
          <Title variant="h3">Base</Title>
          <Tabs>
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Primary</Title>
          <Tabs color="primary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Secondary</Title>
          <Tabs color="secondary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Accent</Title>
          <Tabs color="accent">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <Title variant="h2">No border</Title>
        <div>
          <Title variant="h3">Base</Title>
          <Tabs variant="noBorder">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Primary</Title>
          <Tabs variant="noBorder" color="primary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Secondary</Title>
          <Tabs variant="noBorder" color="secondary">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Accent</Title>
          <Tabs variant="noBorder" color="accent">
            <TabLink active>Badge</TabLink>
            <TabLink>Tab</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <Title variant="h2">Pill variant</Title>

        <div>
          <Title variant="h3">Base</Title>
          <Tabs variant="noBorder">
            <TabLink variant="pill" active>
              Badge
            </TabLink>
            <TabLink variant="pill">Tab</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Primary</Title>
          <Tabs color="primary" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Secondary</Title>
          <Tabs color="secondary" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>

        <div>
          <Title variant="h3">Accent</Title>
          <Tabs color="accent" variant="noBorder">
            <TabLink variant="pill" active>
              Buttons
            </TabLink>
            <TabLink variant="pill">Badge</TabLink>
          </Tabs>
        </div>
      </Display>

      <Display>
        <Title variant="h2">With decorations</Title>
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
