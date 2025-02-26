import { Badge } from '@/Badge/Badge'

export const BadgesView = () => {
  return (
    <section className="flex flex-col gap-2 p-2">
      <h1 className="text-3xl uppercase">Badge</h1>

      {/* Size large */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size large</h2>
        <div className="flex flex-wrap gap-2 ">
          <Badge color="blue" size="large">
            Blue
          </Badge>
          <Badge color="green" size="large">
            Green
          </Badge>
          <Badge color="red" size="large">
            Red
          </Badge>
          <Badge color="slate" size="large">
            slate
          </Badge>
        </div>
      </div>

      {/* Size medium */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size medium (default)</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="blue">Blue</Badge>
          <Badge color="green">Green</Badge>
          <Badge color="red">Red</Badge>
          <Badge color="slate">slate</Badge>
        </div>
      </div>

      {/* Size small */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size small</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="blue" size="small">
            Blue
          </Badge>
          <Badge color="green" size="small">
            Green
          </Badge>
          <Badge color="red" size="small">
            Red
          </Badge>
          <Badge color="slate" size="small">
            slate
          </Badge>
        </div>
      </div>

      {/* Variant dotted */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Variant dotted</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="blue" variant="dotted">
            Blue
          </Badge>
          <Badge color="green" variant="dotted">
            Green
          </Badge>
          <Badge color="red" variant="dotted">
            Red
          </Badge>
          <Badge color="slate" variant="dotted">
            slate
          </Badge>
        </div>
      </div>

      {/* Dissmissable */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Dissmissable</h2>
        <div className="flex flex-wrap gap-2 py-1">
          <Badge color="blue" size="large" dismissible>
            Blue
          </Badge>
          <Badge color="green" size="large" dismissible>
            Green
          </Badge>
          <Badge color="red" size="large" dismissible>
            Red
          </Badge>
          <Badge color="slate" size="large" dismissible>
            slate
          </Badge>
        </div>
      </div>

      {/* asChild */}
      <div className="flex flex-col gap-2 py-2">
        <h2>asChild</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="blue" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="green" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="red" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="slate" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
        </div>
      </div>
    </section>
  )
}
