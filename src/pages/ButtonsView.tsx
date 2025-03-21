import { Display } from '@/components/Display'
import { Button } from '@/ui/Button/Button'
import { BiAlarm } from 'react-icons/bi'

export const ButtonsView = () => {
  return (
    <>
      <h1>Button</h1>

      {/* Size large */}
      <Display>
        <h2>Size large</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button size="large">Base</Button>
          <Button color="primary" size="large">
            Primary
          </Button>
          <Button color="secondary" size="large">
            Secondary
          </Button>
          <Button color="accent" size="large">
            Accent
          </Button>
          <Button color="neutral" size="large">
            Neutral
          </Button>
          <Button color="info" size="large">
            Info
          </Button>
          <Button color="success" size="large">
            Success
          </Button>
          <Button color="warning" size="large">
            Warning
          </Button>
          <Button color="error" size="large">
            Error
          </Button>
        </div>
      </Display>

      {/* Size medium */}
      <Display>
        <h2>Size medium (default)</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button>Base</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent">Accent</Button>
          <Button color="neutral">Neutral</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
        </div>
      </Display>

      {/* Size small */}
      <Display>
        <h2>Size small</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button size="small">Base</Button>
          <Button color="primary" size="small">
            Primary
          </Button>
          <Button color="secondary" size="small">
            Secondary
          </Button>
          <Button color="accent" size="small">
            Accent
          </Button>
          <Button color="neutral" size="small">
            Neutral
          </Button>
          <Button color="info" size="small">
            Info
          </Button>
          <Button color="success" size="small">
            Success
          </Button>
          <Button color="warning" size="small">
            Warning
          </Button>
          <Button color="error" size="small">
            Error
          </Button>
        </div>
      </Display>

      {/* Ghost variant */}
      <Display>
        <h2>Ghost variant</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button variant="ghost">Base</Button>
          <Button color="primary" variant="ghost">
            Primary
          </Button>
          <Button color="secondary" variant="ghost">
            Secondary
          </Button>
          <Button color="accent" variant="ghost">
            Accent
          </Button>
          <Button color="neutral" variant="ghost">
            Neutral
          </Button>
          <Button color="info" variant="ghost">
            Info
          </Button>
          <Button color="success" variant="ghost">
            Success
          </Button>
          <Button color="warning" variant="ghost">
            Warning
          </Button>
          <Button color="error" variant="ghost">
            Error
          </Button>
        </div>
      </Display>

      {/* Text variant */}
      <Display>
        <h2>Text variant</h2>
        <div className="flex gap-4">
          <Button variant="text" size="large">
            Base
          </Button>
          <Button color="primary" variant="text" size="large">
            Primary
          </Button>
          <Button color="secondary" variant="text" size="large">
            Secondary
          </Button>
          <Button color="accent" variant="text" size="large">
            Accent
          </Button>
          <Button color="neutral" variant="text" size="large">
            Neutral
          </Button>
          <Button color="info" variant="text" size="large">
            Info
          </Button>
          <Button color="success" variant="text" size="large">
            Success
          </Button>
          <Button color="warning" variant="text" size="large">
            Warning
          </Button>
          <Button color="error" variant="text" size="large">
            Error
          </Button>
        </div>
      </Display>

      {/* AsChild */}
      <Display>
        <h2>AsChild</h2>
        <div className="flex gap-2 py-2">
          <Button asChild>
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="primary">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="secondary">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="accent">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="neutral">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="info">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="success">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="warning">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
          <Button asChild color="error">
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
        </div>
      </Display>

      {/* Disabled */}
      <Display>
        <h2>Disabled</h2>
        <div className="flex gap-2 py-2">
          <Button disabled>Disabled</Button>
          <Button color="primary" disabled>
            Disabled
          </Button>
          <Button color="secondary" disabled>
            Disabled
          </Button>
          <Button color="accent" disabled>
            Disabled
          </Button>
          <Button color="neutral" disabled>
            Disabled
          </Button>
          <Button color="info" disabled>
            Disabled
          </Button>
          <Button color="success" disabled>
            Disabled
          </Button>
          <Button color="warning" disabled>
            Disabled
          </Button>
          <Button color="error" disabled>
            Disabled
          </Button>
        </div>
      </Display>

      {/* Full width */}
      <Display>
        <h2>Full width</h2>
        <div className="flex flex-col gap-2 py-2">
          <Button fullWidth>Full width</Button>
          <Button color="primary" fullWidth>
            Full width
          </Button>
          <Button color="secondary" fullWidth>
            Full width
          </Button>
          <Button color="accent" fullWidth>
            Full width
          </Button>
          <Button color="neutral" fullWidth>
            Full width
          </Button>
          <Button color="info" fullWidth>
            Full width
          </Button>
          <Button color="success" fullWidth>
            Full width
          </Button>
          <Button color="warning" fullWidth>
            Full width
          </Button>
          <Button color="error" fullWidth>
            Full width
          </Button>
        </div>
      </Display>
    </>
  )
}
