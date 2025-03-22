import { Display } from '@/components/Display'
import { Input } from '@/ui/Input'
import { Title } from '@/ui/Title'

export const InputsView = () => {
  return (
    <>
      <Title uppercase>Inputs</Title>

      <Display>
        <Title variant="h2">Colors</Title>
        <Input type="text" placeholder="Example placeholder" />
        <Input type="text" color="primary" placeholder="Primary" />
        <Input type="text" color="secondary" placeholder="Secondary" />
        <Input type="text" color="accent" placeholder="Accent" />
        <Input type="text" color="neutral" placeholder="Neutral" />
        <Input type="text" color="info" placeholder="Info" />
        <Input type="text" color="success" placeholder="Success" />
        <Input type="text" color="warning" placeholder="Warning" />
        <Input type="text" color="error" placeholder="Error" />
      </Display>

      <Display>
        <Title variant="h2">Sizes</Title>
        <Input type="text" size="large" placeholder="Large" />
        <Input type="text" placeholder="Medium (Default)" />
        <Input type="text" size="small" placeholder="Small" />
      </Display>

      <Display>
        <Title variant="h2">Types</Title>
        <Input type="text" variant="default" placeholder="Text" />
        <Input type="date" placeholder="Date" />
        <Input type="email" placeholder="Email" />
        <Input type="number" placeholder="Number" />
        <Input type="password" placeholder="Password" />
        <Input type="search" placeholder="Search" />
        <Input type="text" disabled placeholder="Disabled" />
        <Input type="text" readOnly placeholder="Read Only" />
        <Input type="text" required placeholder="Required" />
        <Input type="text" autoComplete="on" placeholder="Auto Complete" />
      </Display>
    </>
  )
}
