import { Display } from '@/components/Display'
import { Badge } from '@/ui/Badge/Badge'

export const BadgesView = () => {
  return (
    <>
      <h1>Badge</h1>

      <Display>
        <h2>Size large</h2>

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
        <h2>Size medium (default)</h2>

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
        <h2>Size small</h2>

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
        <h2>Dashed</h2>

        <div className="flex flex-wrap gap-2 py-2">
          <Badge variant="dashed">Base</Badge>
          <Badge color="primary" variant="dashed">
            Primary
          </Badge>
          <Badge color="secondary" variant="dashed">
            Secondary
          </Badge>
          <Badge color="accent" variant="dashed">
            Accent
          </Badge>
          <Badge color="neutral" variant="dashed">
            Neutral
          </Badge>
          <Badge color="info" variant="dashed">
            Info
          </Badge>
          <Badge color="success" variant="dashed">
            Success
          </Badge>
          <Badge color="warning" variant="dashed">
            Warning
          </Badge>
          <Badge color="error" variant="dashed">
            Error
          </Badge>
        </div>
      </Display>

      {/* asChild */}
      <Display>
        <h2>asChild</h2>
        <div className="flex">
          <Badge color="primary" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
        </div>
      </Display>
    </>
  )
}
