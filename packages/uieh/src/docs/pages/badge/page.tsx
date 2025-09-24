import { Display } from '@/docs/components/Display'
import { Badge } from '@/ui/Badge/Badge'
import { Heading } from '@/ui/Heading'

export default function BadgePage() {
  return (
    <>
      <Heading uppercase>Badge</Heading>

      <Display>
        <Heading variant="h2">Size large</Heading>

        <div className="flex flex-wrap gap-2 py-2">
          <Badge size="large">Base</Badge>
          <Badge color="primary" size="large">
            Primary
          </Badge>
          <Badge color="secondary" size="large">
            Secondary
          </Badge>
          <Badge color="accent" size="large">
            Accent
          </Badge>
          <Badge color="neutral" size="large">
            Neutral
          </Badge>
          <Badge color="info" size="large">
            Info
          </Badge>
          <Badge color="success" size="large">
            Success
          </Badge>
          <Badge color="warning" size="large">
            Warning
          </Badge>
          <Badge color="error" size="large">
            Error
          </Badge>
        </div>
      </Display>

      <Display>
        <Heading variant="h2">Size medium (default)</Heading>

        <div className="flex flex-wrap gap-2 py-2">
          <Badge>Base</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="accent">Accent</Badge>
          <Badge color="neutral">Neutral</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="error">Error</Badge>
        </div>
      </Display>

      <Display>
        <Heading variant="h2">Size small</Heading>

        <div className="flex flex-wrap gap-2 py-2">
          <Badge size="small">Base</Badge>
          <Badge color="primary" size="small">
            Primary
          </Badge>
          <Badge color="secondary" size="small">
            Secondary
          </Badge>
          <Badge color="accent" size="small">
            Accent
          </Badge>
          <Badge color="neutral" size="small">
            Neutral
          </Badge>
          <Badge color="info" size="small">
            Info
          </Badge>
          <Badge color="success" size="small">
            Success
          </Badge>
          <Badge color="warning" size="small">
            Warning
          </Badge>
          <Badge color="error" size="small">
            Error
          </Badge>
        </div>
      </Display>

      <Display>
        <Heading variant="h2">Dashed</Heading>

        <div className="flex flex-wrap gap-2 py-2">
          <Badge variant="outlined">Base</Badge>
          <Badge color="primary" variant="outlined">
            Primary
          </Badge>
          <Badge color="secondary" variant="outlined">
            Secondary
          </Badge>
          <Badge color="accent" variant="outlined">
            Accent
          </Badge>
          <Badge color="neutral" variant="outlined">
            Neutral
          </Badge>
          <Badge color="info" variant="outlined">
            Info
          </Badge>
          <Badge color="success" variant="outlined">
            Success
          </Badge>
          <Badge color="warning" variant="outlined">
            Warning
          </Badge>
          <Badge color="error" variant="outlined">
            Error
          </Badge>
        </div>
      </Display>

      {/* asChild */}
      <Display>
        <Heading variant="h2">asChild</Heading>
        <div className="flex">
          <Badge color="primary" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
        </div>
      </Display>
    </>
  )
}
