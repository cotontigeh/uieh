import { Badge } from '@/Badge/Badge'

export const BadgesView = () => {
  return (
    <section className="flex flex-col gap-2 p-2">
      <h1 className="text-3xl uppercase">Badge</h1>

      {/* Size large */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size large</h2>
        <div className="flex flex-wrap gap-2 ">
          <Badge color="gray" size="large">
            Gray
          </Badge>
          <Badge color="blue" size="large">
            Blue
          </Badge>
          <Badge color="purple" size="large">
            Purple
          </Badge>
          <Badge color="indigo" size="large">
            indigo
          </Badge>
          <Badge color="violet" size="large">
            violet
          </Badge>
          <Badge color="green" size="large">
            Green
          </Badge>
          <Badge color="orange" size="large">
            Orange
          </Badge>
          <Badge color="red" size="large">
            Red
          </Badge>
          <Badge color="yellow" size="large">
            Yellow
          </Badge>
          <Badge color="slate" size="large">
            slate
          </Badge>
          <Badge color="lime" size="large">
            lime
          </Badge>
          <Badge color="rose" size="large">
            rose
          </Badge>
          <Badge color="pink" size="large">
            pink
          </Badge>
          <Badge color="zinc" size="large">
            zinc
          </Badge>
          <Badge color="amber" size="large">
            amber
          </Badge>
          <Badge color="cyan" size="large">
            cyan
          </Badge>
          <Badge color="teal" size="large">
            teal
          </Badge>
          <Badge color="emerald" size="large">
            emerald
          </Badge>
          <Badge color="sky" size="large">
            sky
          </Badge>
          <Badge color="fuchsia" size="large">
            fuchsia
          </Badge>
          <Badge color="neutral" size="large">
            neutral
          </Badge>
          <Badge color="stone" size="large">
            stone
          </Badge>
        </div>
      </div>

      {/* Size medium */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size medium (default)</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="gray">Gray</Badge>
          <Badge color="blue">Blue</Badge>
          <Badge color="purple">Purple</Badge>
          <Badge color="indigo">indigo</Badge>
          <Badge color="violet">violet</Badge>
          <Badge color="green">Green</Badge>
          <Badge color="orange">Orange</Badge>
          <Badge color="red">Red</Badge>
          <Badge color="yellow">Yellow</Badge>
          <Badge color="slate">slate</Badge>
          <Badge color="lime">lime</Badge>
          <Badge color="rose">rose</Badge>
          <Badge color="pink">pink</Badge>
          <Badge color="zinc">zinc</Badge>

          <Badge color="amber">amber</Badge>
          <Badge color="cyan">cyan</Badge>
          <Badge color="teal">teal</Badge>
          <Badge color="emerald">emerald</Badge>
          <Badge color="sky">sky</Badge>
          <Badge color="fuchsia">fuchsia</Badge>
          <Badge color="neutral">neutral</Badge>
          <Badge color="stone">stone</Badge>
        </div>
      </div>

      {/* Size small */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size small</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="gray" size="small">
            Gray
          </Badge>
          <Badge color="blue" size="small">
            Blue
          </Badge>
          <Badge color="purple" size="small">
            Purple
          </Badge>
          <Badge color="indigo" size="small">
            indigo
          </Badge>
          <Badge color="violet" size="small">
            violet
          </Badge>
          <Badge color="green" size="small">
            Green
          </Badge>
          <Badge color="orange" size="small">
            Orange
          </Badge>
          <Badge color="red" size="small">
            Red
          </Badge>
          <Badge color="yellow" size="small">
            Yellow
          </Badge>
          <Badge color="slate" size="small">
            slate
          </Badge>
          <Badge color="lime" size="small">
            lime
          </Badge>
          <Badge color="rose" size="small">
            rose
          </Badge>
          <Badge color="pink" size="small">
            pink
          </Badge>
          <Badge color="zinc" size="small">
            zinc
          </Badge>
          <Badge color="amber" size="small">
            amber
          </Badge>
          <Badge color="cyan" size="small">
            cyan
          </Badge>
          <Badge color="teal" size="small">
            teal
          </Badge>
          <Badge color="emerald" size="small">
            emerald
          </Badge>
          <Badge color="sky" size="small">
            sky
          </Badge>
          <Badge color="fuchsia" size="small">
            fuchsia
          </Badge>
          <Badge color="neutral" size="small">
            neutral
          </Badge>
          <Badge color="stone" size="small">
            stone
          </Badge>
        </div>
      </div>

      {/* Variant dotted */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Variant dotted</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="gray" variant="dotted">
            Gray
          </Badge>
          <Badge color="blue" variant="dotted">
            Blue
          </Badge>
          <Badge color="purple" variant="dotted">
            Purple
          </Badge>
          <Badge color="indigo" variant="dotted">
            indigo
          </Badge>
          <Badge color="violet" variant="dotted">
            violet
          </Badge>
          <Badge color="green" variant="dotted">
            Green
          </Badge>
          <Badge color="orange" variant="dotted">
            Orange
          </Badge>
          <Badge color="red" variant="dotted">
            Red
          </Badge>
          <Badge color="yellow" variant="dotted">
            Yellow
          </Badge>
          <Badge color="slate" variant="dotted">
            slate
          </Badge>
          <Badge color="lime" variant="dotted">
            lime
          </Badge>
          <Badge color="rose" variant="dotted">
            rose
          </Badge>
          <Badge color="pink" variant="dotted">
            pink
          </Badge>
          <Badge color="zinc" variant="dotted">
            zinc
          </Badge>
          <Badge color="amber" variant="dotted">
            amber
          </Badge>
          <Badge color="cyan" variant="dotted">
            cyan
          </Badge>
          <Badge color="teal" variant="dotted">
            teal
          </Badge>
          <Badge color="emerald" variant="dotted">
            emerald
          </Badge>
          <Badge color="sky" variant="dotted">
            sky
          </Badge>
          <Badge color="fuchsia" variant="dotted">
            fuchsia
          </Badge>
          <Badge color="neutral" variant="dotted">
            neutral
          </Badge>
          <Badge color="stone" variant="dotted">
            stone
          </Badge>
        </div>
      </div>

      {/* Dissmissable */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Dissmissable</h2>
        <div className="flex flex-wrap gap-2 py-1">
          <Badge color="gray" size="large" dissmissable>
            Gray
          </Badge>
          <Badge color="blue" size="large" dissmissable>
            Blue
          </Badge>
          <Badge color="purple" size="large" dissmissable>
            Purple
          </Badge>
          <Badge color="indigo" size="large" dissmissable>
            indigo
          </Badge>
          <Badge color="violet" size="large" dissmissable>
            violet
          </Badge>
          <Badge color="green" size="large" dissmissable>
            Green
          </Badge>
          <Badge color="orange" size="large" dissmissable>
            Orange
          </Badge>
          <Badge color="red" size="large" dissmissable>
            Red
          </Badge>
          <Badge color="yellow" size="large" dissmissable>
            Yellow
          </Badge>
          <Badge color="slate" size="large" dissmissable>
            slate
          </Badge>
          <Badge color="lime" size="large" dissmissable>
            lime
          </Badge>
          <Badge color="rose" size="large" dissmissable>
            rose
          </Badge>
          <Badge color="pink" size="large" dissmissable>
            pink
          </Badge>
          <Badge color="zinc" size="large" dissmissable>
            zinc
          </Badge>
          <Badge color="amber" size="large" dissmissable>
            amber
          </Badge>
          <Badge color="cyan" size="large" dissmissable>
            cyan
          </Badge>
          <Badge color="teal" size="large" dissmissable>
            teal
          </Badge>
          <Badge color="emerald" size="large" dissmissable>
            emerald
          </Badge>
          <Badge color="sky" size="large" dissmissable>
            sky
          </Badge>
          <Badge color="fuchsia" size="large" dissmissable>
            fuchsia
          </Badge>
          <Badge color="neutral" size="large" dissmissable>
            neutral
          </Badge>
          <Badge color="stone" size="large" dissmissable>
            stone
          </Badge>
        </div>
      </div>

      {/* asChild */}
      <div className="flex flex-col gap-2 py-2">
        <h2>asChild</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Badge color="gray" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="blue" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="purple" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="indigo" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="violet" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="green" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="orange" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="red" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="yellow" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="slate" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="lime" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="rose" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="pink" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="zinc" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="amber" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="cyan" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="teal" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="emerald" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="sky" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="fuchsia" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="neutral" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
          <Badge color="stone" asChild>
            <a href="#">asChild "a"</a>
          </Badge>
        </div>
      </div>
    </section>
  )
}
